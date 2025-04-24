import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetails } from "../redux/slices/movieDetailSlice";
import { FaStar } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((store) => store.movieDetail);
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id, dispatch]);

  const {
    overview,
    title,
    vote_average,
    backdrop_path,
    genres,
    original_language,
    poster_path,
    release_date,
  } = movieDetail;

  const year = release_date ? new Date(release_date).getFullYear() : "Unknown";
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
      className="min-h-screen bg-cover bg-center bg-no-repeat relative p-2 px-3 "
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="text-white min-h-screen  relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start lg:ps-40 lg:pt-10 lg:gap-8">
        <div className="flex flex-col justify-center items-center pb-6">
          <h1 className="font-extrabold text-xl pb-4  lg:text-4xl lg:pb-3">
            {title}
          </h1>

          <div className="max-w-[350px] w-60 lg:w-100">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
              className="w-full h-full object-cover rounded-md "
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4 pb-2 lg:gap-8 lg:pt-15 ">
          <div className="max-w-[500px] flex flex-col lg:gap-2">
            <p className="font-extrabold  lg:text-xl">Description:</p>
            <p className="xs:text-xs ">{overview}</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-2">
            <FaStar className="text-yellow-400 lg:text-2xl" />
            <p className="font-extrabold">
              {vote_average ? vote_average?.toFixed(2) : "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-2 ">
            <p className="font-extrabold">Year: </p>
            <p>{year}</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-2 ">
            <p className="font-extrabold">Genre: </p>
            {genres &&
              genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
          </div>
          <div className="flex items-center gap-2 lg:gap-2 ">
            <p className="font-extrabold">Language: </p>
            <p>{original_language}</p>
          </div>
          <div className="flex items-center gap-4  lg:gap-4 ">
            <p className="font-extrabold">Add Watching List </p>
            <button className="hover:cursor-pointer hover:text-red-600 duration-300">
              <IoAddCircle className=" text-2xl lg:text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
