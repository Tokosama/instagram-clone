"use client";

import { ScaleLoader } from "react-spinners";

export default function Preloader() {
  return (
    <>
      <div className="">
        <ScaleLoader
        color={"#aaa"}
          speedMultiplier={4}
          loading={true}
        />{" "}
      </div>
    </>
  );
}
