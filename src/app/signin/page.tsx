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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff9f3ff] text-[#555555]">
      {/* Sign In Card */}
      <div className="bg-[#fff9f3ff] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#aaaaaa]">
        <h1 className="text-3xl font-bold mb-2 text-[#555555]">Sign In</h1>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-[#aaaaaa] cursor-pointer py-2 rounded hover:bg-gray-200 transition text-[#555555]"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-[#aaaaaa]" />
          <span className="mx-2 text-[#777777] text-sm">OR</span>
          <hr className="flex-1 border-[#aaaaaa]" />
        </div>

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-[#555555]">Email</label>
            <input
              type="email"
              placeholder="veer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#aaaaaa] rounded-xl bg-[#fff9f3ff] text-[#555555]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-[#555555]">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-[#aaaaaa] rounded-xl bg-[#fff9f3ff] text-[#555555]"
              required
            />
          </div>

          {errorMsg && <p className="mb-4 text-[#b86b3d]">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-2 rounded shadow-md hover:bg-[#5c2e0e] transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-[#555555]">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="underline hover:text-[#8B4513] transition bg-transparent border-none p-0 cursor-pointer"
            type="button"
          >
            Sign up
          </button>
        </p>
      </div>

      {/* Terms and Privacy Outside Box */}
      <p className="text-center text-xs text-gray-500 mt-4">
        By signing in, you agree to the{" "}
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
