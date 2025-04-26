import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={2000}
        closeOnClick
        draggable
      />

      <main className="">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 w-full z-50 h-[56px] sm:block lg:hidden md:hidden">
        <MobileNavbar />
      </nav>
    </>
  );
}
