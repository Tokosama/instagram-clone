"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div
      className="bg-black/80 dark:bg-gray-700/30 fixed inset-0 z-20"
      onClick={() => router.back()}
    >
      <div className="bg-white  dark:bg-gray-950 rounded-lg left-8 right-8 top-9 bottom-9 fixed">
        <div className="w-full absolute rounded-lg top-4 bottom-4  z-30 overflow-y-auto ">
          <div
            onClick={(ev) => ev.stopPropagation()}
            className=" px-4 "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
