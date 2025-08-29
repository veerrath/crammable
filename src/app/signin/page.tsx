"use client";

import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const redirectToDashboard = () => {
    router.push("/dashboard");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      redirectToDashboard();
    } catch (error: any) {
      setErrorMsg(error.message || "Failed to sign in.");
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

      redirectToDashboard();
    } catch (error: any) {
      setErrorMsg(error.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-700">
      {/* Sign In Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Sign In</h1>

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

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="veer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
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
            />
          </div>

          {errorMsg && <p className="mb-4 text-red-600">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-3 rounded-lg shadow-lg hover:bg-amber-800 transition-colors font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="underline hover:text-amber-900 transition bg-transparent border-none p-0 cursor-pointer text-amber-700 font-medium"
            type="button"
          >
            Sign up
          </button>
        </p>
      </div>

      {/* Terms and Privacy Outside Box */}
      <p className="text-center text-xs text-gray-500 mt-6">
        By signing in, you agree to the{" "}
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
