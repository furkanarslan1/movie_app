import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getMovieDetails } from "../redux/slices/movieDetailSlice";
import { FaStar, FaPlay } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";

import {
  addToWatchList,
  removeFromWatchList,
} from "../redux/slices/watchListSlice";
import VideoModal from "../components/VideoModal";
import { getVideoForModal } from "../redux/slices/videoModalSlice";

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

  const handleAddWatch = () => {
    const payload = {
      id,
      title,
      poster_path,
      vote_average,
      year,
    };
    dispatch(addToWatchList(payload));
  };

  const handleRemoveWatch = () => {
    const payload = {
      id,
    };
    dispatch(removeFromWatchList(payload));
  };

  const isWatchList = useSelector((store) =>
    store.watchList.watchLists?.some((movie) => movie.id === id)
  );

  const navigate = useNavigate();

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
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
      className="min-h-screen bg-cover bg-center bg-no-repeat relative p-2 px-3  pb-20 lg:pb-0"
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="text-white min-h-screen  relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start lg:ps-40 lg:pt-10 lg:gap-8">
        <div className="flex flex-col justify-center items-center pb-6">
          <h1 className="font-extrabold text-xl pb-4  lg:text-4xl lg:pb-3">
            {title}
          </h1>

          <div className="max-w-[350px] w-60 lg:w-100 relative">
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

          <div className="flex lg:flex-col  lg:items-start justify-between">
            <div className="flex items-center gap-4  lg:gap-4 ">
              <p className="font-extrabold">Add Watching List </p>
              <button
                className="hover:cursor-pointer hover:text-red-600 duration-300"
                onClick={isWatchList ? handleRemoveWatch : handleAddWatch}
              >
                {isWatchList ? (
                  <FaMinusCircle className=" text-4xl lg:text-6xl" />
                ) : (
                  <IoAddCircle className=" text-4xl lg:text-6xl " />
                )}
              </button>
            </div>
            <button
              className="flex items-center gap-4 bg-white rounded-2xl w-30 text-black px-2 hover:cursor-pointer"
              onClick={handlePlay}
            >
              <button
                className="duration-500 hover:text-red-600 text-2xl hover:cursor-pointer  text-red-600 bg-white p-2 rounded-full  "
                onClick={handlePlay}
              >
                <FaPlay />
              </button>
              <p className="font-extrabold">Play</p>
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="font-bold lg:text-7xl text-white absolute text-3xl top-2 right-3 lg:top-10 lg:right-15 hover:cursor-pointer"
        >
          X
        </button>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoKey={videoModalList?.results?.[0]?.key}
      />
    </div>
  );
}
