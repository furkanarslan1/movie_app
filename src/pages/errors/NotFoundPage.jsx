import React from "react";
import { Link } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-red-600 lg:gap-14  lg:pt-10">
      <h1 className="font-extrabold lg:text-6xl">NotFoundPage</h1>
      <Link
        to="/home"
        className="p-4 bg-red-600 text-white rounded-md font-bold  lg:text-2xl"
      >
        <div className="flex items-center gap-4">
          <FaArrowCircleLeft />
          <p>Home</p>
        </div>
      </Link>
    </div>
  );
}
