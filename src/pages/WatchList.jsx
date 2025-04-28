import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { loadWatchList } from "../redux/slices/watchListSlice";
import { Link } from "react-router";

export default function WatchList() {
  const { watchLists } = useSelector((store) => store.watchList);
  const { userValid } = useSelector((store) => store.register);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWatchList());
  }, [dispatch]);
  return (
    <>
      {userValid ? (
        <div className="bg-black text-white min-h-screen px-8 py-4">
          <h1 className="font-extrabold lg:text-4xl lg:pb-4">Watch List</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6  gap-4 px-4 pt-6">
            {watchLists &&
              watchLists.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center pt-20 flex flex-col gap-8 items-center min-h-screen ">
          <h1 className=" text-3xl  lg:text-5xl">You have to Sign In</h1>

          <Link
            to="/sign-in"
            className="bg-red-600 w-40  text-white  p-2 rounded-md font-bold"
          >
            Click here
          </Link>
        </div>
      )}
    </>
  );
}
