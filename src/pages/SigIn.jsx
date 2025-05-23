import React from "react";
import SignInFrom from "../components/SignInFrom";

export default function SignIn() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-600  to-red-900">
      <div className="absolute inset-0 bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>

      <div className="relative z-10 w-full max-w-md p-4 sm:p-8">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-xl">
          <SignInFrom />
        </div>
      </div>
    </div>
  );
}
