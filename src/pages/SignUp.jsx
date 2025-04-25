import React from "react";
import RegisterForm from "../components/RegisterForm";
import cinema from "../assets/cinema.jpg";

export default function SignUp() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cinema})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 w-full max-w-md p-4 sm:p-8">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-xl">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
