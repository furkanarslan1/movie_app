import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <ImSpinner9 className="text-red-600 text-5xl animate-spin" />
        <p>Loading</p>
      </div>
    </div>
  );
}
