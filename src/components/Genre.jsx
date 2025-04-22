import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenre } from "../redux/slices/genreSlice";

export default function Genre() {
  const { genreList } = useSelector((store) => store.genres);

  return (
    <div>
      <ul>{genreList && genreList.map((genre) => <li>{genre.name}</li>)}</ul>
    </div>
  );
}
