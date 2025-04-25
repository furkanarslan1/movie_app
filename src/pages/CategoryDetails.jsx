import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGenreDetails } from "../redux/slices/genreSlice";
import MovieCard from "../components/MovieCard";

export default function CategoryDetails() {
  const { id } = useParams();
  const { genreDetailList, genreList } = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const currentGenre = genreList.find((genre) => genre.id === Number(id));
  const name = currentGenre?.name || "Category";

  useEffect(() => {
    dispatch(getGenreDetails(id));
  }, [dispatch, id]);

  return (
    <div className="bg-black text-white">
      <div className="text-4xl p-4 ms-8 bg-red-600 max-w-75 text-center font-extrabold rounded-xl ">
        {name}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 px-4 pt-6">
        {genreDetailList &&
          genreDetailList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
