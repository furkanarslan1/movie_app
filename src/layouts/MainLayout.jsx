import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <h1>MainLayouts</h1>

      <main>
        <Outlet />
      </main>
    </>
  );
}
