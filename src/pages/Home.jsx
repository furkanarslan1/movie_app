import React from "react";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-black">
        <CategorySection title="Upcoming" type="upcoming" />
        <CategorySection title="Top Rated" type="topRated" />
        <CategorySection title="Popular" type="popular" />
        <CategorySection title="Discover" type="discover" />
      </section>
    </>
  );
}
