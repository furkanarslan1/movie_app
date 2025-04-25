import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function WatchList() {
  const { watchLists } = useSelector((store) => store.watchList);
  return (
    <>
      <div className="bg-black text-white min-h-screen px-8 py-4">
        <h1 className="font-extrabold lg:text-4xl lg:pb-4">Watch List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-4 px-4 pt-6">
          {watchLists &&
            watchLists.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </>
  );
}
