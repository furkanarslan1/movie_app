import React from "react";
import { PiFilmSlateFill } from "react-icons/pi";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  return (
    <div className="px-6 py-5 bg-black text-white flex items-center justify-between ">
      <div className="flex items-center hover:cursor-pointer gap-12 ">
        <Link to="/" className="flex items-center gap-4">
          <PiFilmSlateFill className="text-6xl text-white " />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200 font-extrabold text-2xl">
            MovieApp
          </h1>
        </Link>
        <div className="  ms-8  hidden md:block ">
          <ul className="flex items-center gap-2 font-extrabold">
            <li className="p-2">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/tv-shows">TV Shows</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-12  ">
        <Link
          to="/watch-list"
          className="font-extrabold hover:cursor-pointer hover:bg-red-600 p-2 rounded-2xl  transition duration-500 hidden md:block"
        >
          Watchlist{" "}
        </Link>
        <div className="flex items-center divide-x-4 hidden md:block">
          <Link to="/sign-up" className="pe-4 hover:cursor-pointer">
            Sign Up
          </Link>
          <Link to="/sign-in" className="ps-4 hover:cursor-pointer">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
