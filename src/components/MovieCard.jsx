import React, { useState } from "react";
import { FaPlus, FaPlay, FaStar, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../redux/slices/watchListSlice";

import VideoModal from "./VideoModal";
import { getVideoForModal } from "../redux/slices/videoModalSlice";

export default function MovieCard({ movie }) {
  const { id, title, poster_path, vote_average, release_date } = movie;
  const dispatch = useDispatch();

  const year = release_date ? new Date(release_date).getFullYear() : "";

  const handleAddWatch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToWatchList({ id, title, poster_path, vote_average, year }));
  };

  const handleRemoveWatch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromWatchList({ id }));
  };

  const isWatchList = useSelector((store) =>
    store.watchList.watchLists?.some((movie) => movie.id === id)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState(null);

  const { videoModalList } = useSelector((store) => store.videoModal);

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(getVideoForModal(id))
      .unwrap()
      .then(() => {
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.log("Failed Video", error);
      });
  };
  return (
    <div className="group relative overflow-hidden hover:cursor-pointer max-w-[400px]">
      <Link to={`/movieDetails/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover rounded-md group-hover:scale-110 group-hover:opacity-50 duration-500"
        />
      </Link>

      <div className="absolute bottom-0 px-6 w-full bg-gradient-to-b from-transparent to-black uppercase">
        <h3 className="group-hover:mb-6 duration-500 font-extrabold hidden md:block ">
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
          <button
            className="group-hover:mb-8 duration-500 hover:text-red-600 text-xl hover:cursor-pointer"
            onClick={handlePlay}
          >
            <FaPlay />
          </button>

          <button
            onClick={(e) =>
              isWatchList ? handleRemoveWatch(e) : handleAddWatch(e)
            }
            className="group-hover:mb-8 duration-500 hover:text-red-600 text-xl hover:cursor-pointer"
          >
            {isWatchList ? <FaMinusCircle /> : <FaPlus />}
          </button>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoKey={videoModalList?.results?.[0]?.key}
      />
    </div>
  );
}
