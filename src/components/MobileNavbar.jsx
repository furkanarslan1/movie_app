import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { NavLink } from "react-router";

export default function MobileNavbar() {
  return (
    <div className=" bg-black text-white h-full flex items-center justify-around text-3xl ">
      <NavLink to="/home">
        <IoMdHome className=" " />
      </NavLink>

      <NavLink to="/categories">
        <BiSolidCategory className="" />
      </NavLink>
      <NavLink to="/watch-list">
        <FaThList />
      </NavLink>

      <NavLink to="user">
        <FaUserCircle />
      </NavLink>
    </div>
  );
}
