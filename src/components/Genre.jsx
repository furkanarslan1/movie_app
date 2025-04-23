import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Genre() {
  const { genreList } = useSelector((store) => store.genres);

  return (
    <div className="min-h-screen  bg-black  text-white p-4 ">
      <h1 className="font-extrabold text-6xl mb-12">Categories</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {genreList &&
          genreList.map((genre) => (
            <Link to={`/categories/${genre.id}`} className="" key={genre.id}>
              <div className="bg-gray-800 p-4 rounded-lg shadow-2xl hover:bg-gray-700 transition duration-300 hover:cursor-pointer w-[200px] h-[200px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap font-bold text-2xl hover:text-red-600 ">
                {genre.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
