import React from "react";
import { useSelector } from "react-redux";
import Genre from "../components/Genre";

export default function Categories() {
  //   const { genreList } = useSelector((store) => store.genres);
  return (
    <div>
      <Genre />
    </div>
  );
}
