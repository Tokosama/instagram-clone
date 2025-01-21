import Link from "next/link";
import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
export default function DesktopNav() {
  return (
    <div className="hidden lg:block shadow-md shadow-gray-400 px-4 pb-4 w-48">
      <div className="top-4 sticky">
        <img
          src="/igt.png"
          alt=""
          className=""
        />

        <div className=" ml-1 inline-flex flex-col gap-6  mt-8 *:flex *:items-center *:gap-2 ">
          <Link href={"/"}>
            <HomeIcon />
            Home
          </Link>
          <Link href={"/search"}>
            <SearchIcon />
            Search
          </Link>
          <Link href={"/browse"}>
            <LayoutGridIcon />
            Browse
          </Link>
          <Link href={"/profile"}>
            <UserIcon />
            Profile
          </Link>
          <Link href={"/create"}>
            <CameraIcon />
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}
