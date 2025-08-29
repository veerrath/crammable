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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff9f3ff] text-[#6b6b6b]">
      {/* Sign-up Card */}
      <div className="bg-[#fff9f3ff] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#6b6b6b]">
        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-gray-100 border cursor-pointer border-[#6b6b6b] py-2 rounded hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-[#6b6b6b]" />
          <span className="mx-2 text-[#6b6b6b] text-sm">OR</span>
          <hr className="flex-1 border-[#6b6b6b]" />
        </div>

        <form onSubmit={handleSignUp}>
          <div className="flex gap-2 mb-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium">First name</label>
              <input
                type="text"
                placeholder="Veer"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border border-[#6b6b6b] rounded-xl bg-[#fff9f3ff]"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium">Last name</label>
              <input
                type="text"
                placeholder="Rathore"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border border-[#6b6b6b] rounded-xl bg-[#fff9f3ff]"
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="veer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#6b6b6b] rounded-xl bg-[#fff9f3ff]"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-[#6b6b6b] rounded-xl bg-[#fff9f3ff]"
              required
              autoComplete="new-password"
            />
          </div>

          {errorType === "emailExists" && (
            <p className="mb-4 text-[#b86b3d]">
              The email address you entered is already registered.
            </p>
          )}

          {errorType === "weakPassword" && (
            <div className="mb-4 text-[#b86b3d]">
              <p>Your password is too weak. Please make sure it meets all of the following:</p>
              <ul className="list-none p-0 mt-2">
                {passwordRules.map(({ label, test }) => {
                  const passed = test(password);
                  return (
                    <li
                      key={label}
                      className={`flex items-center mb-1 ${
                        passed ? "text-green-600" : "text-[#b86b3d]"
                      }`}
                    >
                      <span
                        className={`inline-block w-5 h-5 mr-2 rounded-full text-white text-center text-xs leading-5 ${
                          passed ? "bg-green-600" : "bg-[#b86b3d]"
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
            className="w-full bg-[#8B4513] text-white py-2 rounded shadow-md hover:bg-[#5c2e0e] transition"
          >
            Create an account
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/signin")}
            className="underline hover:text-[#8B4513] transition bg-transparent border-none p-0 cursor-pointer"
            type="button"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Terms & Privacy outside card */}
      <p className="text-center text-xs mt-6 max-w-md">
        By creating or entering an account, you agree to the{" "}
        <a href="/terms" className="underline text-[#8B4513]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline text-[#8B4513]">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
