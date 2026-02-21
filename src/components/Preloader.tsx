"use client";

import { ClipLoader, ScaleLoader } from "react-spinners";

export default function Preloader() {
  return (
    <>
      <div className="w-full  h-screen flex items-center justify-center">
        <ClipLoader
          color={"#D44044"}
          speedMultiplier={1}
          loading={true}
        />{" "}
      </div>
    </>
  );
}
