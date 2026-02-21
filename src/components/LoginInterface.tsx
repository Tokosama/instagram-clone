"use client";
import { handleGoogleSignIn } from "@/actions";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Login() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleSignIn = async () => {
    setButtonLoading(true);
    handleGoogleSignIn();
  };
  return (
    <div
      className="w-100 flex justify-center align-middle items-center h-full"
    >
      {" "}
      <button
        className=" px-8 py-2 w-72 h-10 text-black rounded-full flex justify-center items-center hover:bg-slate-100 bg-ig-red"
        disabled={buttonLoading}
        onClick={handleSignIn}
      >
        {buttonLoading ? (
          <ClipLoader
            color="#26282A"
            size={20}
          />
        ) : (
          <>
            <img
              src="/google.png"
              alt=""
              className="h-6 mr-2"
            />
            Signin with Google
          </>
        )}
      </button>
    </div>
  );
}
