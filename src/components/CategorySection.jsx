// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getPopularMovies,
//   getTopRatedMovies,
//   getUpcomingMovies,
// } from "../redux/slices/movieCategorySlice";
// import MovieCard from "./MovieCard";

// export default function CategorySection({ title, type }) {
//   const dispatch = useDispatch();
//   const { popular, topRated, upcoming } = useSelector(
//     (store) => store.movieCategory
//   );

//   useEffect(() => {
//     if (type === "upcoming") {
//       dispatch(getUpcomingMovies());
//     }

//     if (type === "topRated") {
//       dispatch(getTopRatedMovies());
//     }
//     if (type === "popular") {
//       dispatch(getPopularMovies());
//     }
//   }, []);

//   const movies =
//     type === "upcoming" ? upcoming : type === "topRated" ? upcoming : popular;

//   return (
//     <div>
//       <section className="py-8 text-white">
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-4 px-4 pt-6">
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiscoverMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../redux/slices/movieCategorySlice";
import MovieCard from "./MovieCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function CategorySection({ title, type }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const dispatch = useDispatch();
  const { popular, topRated, upcoming, discover } = useSelector(
    (store) => store.movieCategory
  );

  useEffect(() => {
    if (type === "upcoming") dispatch(getUpcomingMovies());
    if (type === "topRated") dispatch(getTopRatedMovies());
    if (type === "popular") dispatch(getPopularMovies());
    if (type === "popular") dispatch(getDiscoverMovies());
  }, [dispatch, type]);

  // Türüne göre doğru veri setini seç
  const movies =
    type === "discover"
      ? discover
      : "upcoming"
      ? upcoming
      : type === "topRated"
      ? topRated
      : popular;

  return (
    <section className="py-8 text-white px-4 relative">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <button
        onClick={scrollLeft}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10  text-6xl bg-opacity-50 hover:cursor-pointer"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-5 top-1/2 transform -translate-y-1/2  text-6xl z-10 bg-opacity-50 hover:cursor-pointer"
      >
        <FaChevronRight />
      </button>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-52">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
