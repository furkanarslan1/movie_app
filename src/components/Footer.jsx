import React from "react";
import { Link } from "react-router";
import { PiFilmSlateFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className=" bg-black text-white lg:py-1 lg:px-4 flex flex-col items-center justify-center gap-2">
      <Link to="/" className="flex items-center gap-4">
        <PiFilmSlateFill className="text-6xl text-white " />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200 font-extrabold text-2xl">
          MovieApp
        </h1>
      </Link>
      <p className="font-bold">&copy; 2025 Movie-App. All rights reserved. </p>
    </div>
  );
}
