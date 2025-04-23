import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGenreDetails } from "../redux/slices/genreSlice";

export default function CategoryDetails() {
  const { id } = useParams();
  const { genreDetailList } = useSelector((store) => store.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <div>CategoryDetails</div>
      <div>
        {genreDetailList &&
          genreDetailList.map((category) => (
            <div>
              <h1>{category.title}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
