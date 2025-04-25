import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function MovieCard({ movie }) {
  const { id, title, poster_path, vote_average, release_date } = movie;

  const year = release_date ? new Date(release_date).getFullYear() : "";
  return (
    <Link
      to={`/movieDetails/${id}`}
      className="group relative overflow-hidden hover:cursor-pointer"
    >
      <div className="max-h-[400px] max-w-[400px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          loading="lazy"
          className="w-fıll h-full object-cover rounded-md group-hover:scale-110 group-hover:opacity-50 duration-500"
        />

        <div className="absolute bottom-0 px-6 w-full bg-gradient-to-b from-transparent to-black uppercase">
          <h3 className="group-hover:mb-6 duration-500 font-extrabold ">
            {title}
          </h3>
          <div className="flex items-center justify-between group-hover:mb-6 duration-500 opacity-0 group-hover:opacity-100">
            <p className="font-bold">{year}</p>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <p className="font-bold">{vote_average.toFixed(1)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 opacity-0 group-hover:opacity-100">
            <button className="group-hover:mb-8 duration-500 hover:text-red-600 text-xl">
              <FaPlay />
            </button>

            <button className="group-hover:mb-8 duration-500  hover:text-red-600 text-xl">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
