import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import { PiFilmSlateFill } from "react-icons/pi";

export default function MainLayout() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setLoading(false);
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
    }
  }, [loading]);
  return (
    <div className="">
      {loading && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-200 text-6xl font-extrabold pb-8">
            Movie App
          </h1>
          <PiFilmSlateFill className="text-8xl text-white pb-6" />
          <div className="w-64 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="bg-red-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white mt-4">{progress}%</p>
        </div>
      )}

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

      <footer className="hidden md:block">
        <Footer />
      </footer>
    </div>
  );
}
