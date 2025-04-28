import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logout } from "../redux/slices/registerSlice";
import { loadWatchList } from "../redux/slices/watchListSlice";

export default function User() {
  const user = useSelector((store) => store.register.userValid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
    dispatch(loadWatchList());
  };

  if (!user) {
    return (
      <h1>
        <Link to="/sign-in">Return Sing-In</Link>
      </h1>
    );
  }
  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-black font-bold pt-4 lg:pt-20">
      <div className="flex flex-col  gap-12 lg:gap-8 justify-center items-center bg-gray-600 h-120 w-80 lg:w-140 lg:h-120 rounded-2xl ">
        <div className="bg-gray-400 py-2 w-full text-center ">
          <h1>
            Welcome,
            <span className="font-extrabold uppercase "> {user.username}</span>
          </h1>
        </div>
        <div className="bg-gray-400 py-2 w-full text-center ">
          <p>E-Mail: {user.email}</p>
        </div>
        <div className="bg-gray-400 py-2 w-full text-center ">
          <p>Name: {user.name}</p>
        </div>
        <div className="bg-gray-400 py-2 w-full text-center ">
          <p>Surname: {user.surname}</p>
        </div>
        <div className="px-4 py-2 lg:px-8 lg:py-4 rounded-2xl bg-red-600 hover:bg-white duration-300 hover:cursor-pointer hover:text-red-600 text-white">
          <button className="hover:cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
