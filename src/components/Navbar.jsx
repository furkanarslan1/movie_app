import React, { useEffect } from "react";
import { PiFilmSlateFill } from "react-icons/pi";
import { NavLink, Link } from "react-router";
import { BiSolidCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../redux/slices/genreSlice";
import { loadWatchList } from "../redux/slices/watchListSlice";

export default function Navbar() {
  const { genreList } = useSelector((store) => store.genres);
  const user = useSelector((store) => store.register.userValid);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(loadWatchList());
    }
    dispatch(getGenre());
  }, [user, dispatch]);

  const watchListCounter = useSelector(
    (store) => store.watchList.watchLists.length
  );
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
        <div className="hidden md:block relative group">
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <BiSolidCategory className="text-2xl" />
            <Link to="/categories" className="text-md">
              Categories
            </Link>
          </div>
          <div className="absolute top-full lef-0  hidden group-hover:block  bg-black p-4 rounded-lg w-[200px]  z-20  ">
            <ul className=" flex flex-col  gap-2  py-4 px-2 ">
              {genreList &&
                genreList.map((genre) => (
                  <Link
                    to={`categories/${genre.id}`}
                    className="hover:cursor-pointer hover:text-red-600  transition duration-300"
                    key={genre.id}
                  >
                    {genre.name}
                  </Link>
                ))}
            </ul>
          </div>
        </div>
        <Link
          to="/watch-list"
          className="font-extrabold hover:cursor-pointer hover:bg-red-600 p-2 rounded-2xl  transition duration-500 hidden md:block"
        >
          <div className="relative ">
            <p>Watchlist</p>
            {watchListCounter === 0 ? (
              ""
            ) : (
              <span className="absolute -top-5 -right-8 bg-red-600 px-2   rounded-full">
                {watchListCounter}
              </span>
            )}
          </div>
        </Link>

        {user ? (
          <Link to="user" className="flex flex-col items-center xs:hidden ">
            <div>
              <img
                src="https://i.pravatar.cc/40"
                alt=""
                className="rounded-full hidden md:block"
              />
            </div>
            <p className="font-bold text-white hidden md:block text-xs">
              {user.username}
            </p>
          </Link>
        ) : (
          <div className="flex items-center divide-x-4 hidden md:block">
            <Link to="/sign-up" className="pe-4 hover:cursor-pointer">
              Sign Up
            </Link>
            <Link to="/sign-in" className="ps-4 hover:cursor-pointer">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
