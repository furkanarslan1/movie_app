import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiscoverTV } from "../redux/slices/tvShowsSlice";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
export default function TVshows() {
  const dispatch = useDispatch();
  const { tvDiscovery, status } = useSelector((store) => store.tvShows);

  useEffect(() => {
    dispatch(getDiscoverTV());
  }, []);

  return (
    <>
      <div className="bg-black text-white min-h-screen relative">
        {status === "pending" && <Loading />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-4 px-4 pt-6">
          {tvDiscovery &&
            tvDiscovery.map((tv) => <MovieCard key={tv.id} movie={tv} />)}
        </div>
      </div>
    </>
  );
}
