"use client";

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const passwordRules = [
  { label: "At least 8 characters", test: (pw: string) => pw.length >= 8 },
  { label: "Includes a number", test: (pw: string) => /\d/.test(pw) },
  {
    label: "Includes a special character",
    test: (pw: string) => /[!@#$%^&*(),.?\":{}|<>]/.test(pw),
  },
  { label: "Includes an uppercase letter", test: (pw: string) => /[A-Z]/.test(pw) },
];

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorType, setErrorType] = useState<"emailExists" | "weakPassword" | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorType(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        lastName,
        email,
      });

      localStorage.setItem("user", userCredential.user.email || "");
      localStorage.setItem("firstName", firstName);

      router.push("/dashboard");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setErrorType("emailExists");
      } else if (err.code === "auth/weak-password") {
        setErrorType("weakPassword");
      } else {
        setErrorType(null);
        console.error("Sign up error:", err);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    setErrorMsg("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const fullName = user.displayName || "";
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const userDocRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDocRef);

      if (!userSnap.exists()) {
        await setDoc(userDocRef, {
          firstName,
          lastName,
          email: user.email,
        });
      } else {
        await setDoc(
          userDocRef,
          { firstName, lastName, email: user.email },
          { merge: true }
        );
      }

      router.push("/dashboard");
    } catch (error: any) {
      setErrorMsg(error.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-700">
      {/* Sign-up Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Sign Up</h1>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 cursor-pointer py-3 rounded-lg hover:bg-gray-100 transition text-gray-700 font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-200" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <form onSubmit={handleSignUp}>
          <div className="flex gap-2 mb-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                placeholder="Veer"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Rathore"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="veer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
              autoComplete="new-password"
            />
          </div>

          {errorType === "emailExists" && (
            <p className="mb-4 text-red-600">
              The email address you entered is already registered.
            </p>
          )}

          {errorType === "weakPassword" && (
            <div className="mb-4 text-red-600">
              <p>Your password is too weak. Please make sure it meets all of the following:</p>
              <ul className="list-none p-0 mt-2">
                {passwordRules.map(({ label, test }) => {
                  const passed = test(password);
                  return (
                    <li
                      key={label}
                      className={`flex items-center mb-1 ${
                        passed ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span
                        className={`inline-block w-5 h-5 mr-2 rounded-full text-white text-center text-xs leading-5 ${
                          passed ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        ✓
                      </span>
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-3 rounded-lg shadow-lg hover:bg-amber-800 transition-colors font-semibold"
          >
            Create an account
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/signin")}
            className="underline hover:text-amber-900 transition bg-transparent border-none p-0 cursor-pointer text-amber-700 font-medium"
            type="button"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Terms & Privacy outside card */}
      <p className="text-center text-xs mt-6 max-w-md text-gray-500">
        By creating or entering an account, you agree to the{" "}
        <a href="/terms" className="underline text-amber-700">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline text-amber-700">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
