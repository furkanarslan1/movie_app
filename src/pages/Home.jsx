import React, { useEffect, useState } from "react";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../redux/slices/movieCategorySlice";

export default function Home() {
  const dispatch = useDispatch();
  const { video } = useSelector((store) => store.movieCategory);
  useEffect(() => {
    dispatch(getVideo());
  }, []);

  console.log(video);
  return (
    <>
      <section>
        <div className="home-page">
          {video.length > 0 && (
            <div
              className="video-container relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="video absolute lg:top-0 top-0 left-0 w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video[0].key}?autoplay=1&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="min-h-screen bg-black">
        <CategorySection title="Upcoming" type="upcoming" />
        <CategorySection title="Top Rated" type="topRated" />
        <CategorySection title="Popular" type="popular" />
        <CategorySection title="TV" type="tv" />
        <CategorySection title="Discover" type="discover" />
      </section>
    </>
  );
}

{
  /* <section>
        <div className="home-page">
          {video.length > 0 && (
            <div className="video-container ">
              <div className="video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video[0].key}?autoplay=1&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section> */
}
