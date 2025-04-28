import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import { getDiscoverMovies } from "../redux/slices/movieCategorySlice";
import Loading from "../components/Loading";
export default function Movies() {
  const dispatch = useDispatch();
  const { discover, status } = useSelector((store) => store.movieCategory);

  useEffect(() => {
    dispatch(getDiscoverMovies());
  }, []);

  return (
    <>
      <div className="bg-black text-white min-h-screen relavite">
        {status === "pending" && <Loading />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-4 px-4 pt-6">
          {discover &&
            discover.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  );
}
