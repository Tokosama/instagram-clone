"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/search", label: "Search", icon: SearchIcon },
  { href: "/browse", label: "Browse", icon: LayoutGridIcon },
  { href: "/profile", label: "Profile", icon: UserIcon },
  { href: "/create", label: "Create", icon: CameraIcon },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block shadow-md shadow-gray-400 px-4 pb-4 w-52">
      <div className="top-4 sticky">
        <img
          src="/igt.png"
          alt=""
          className="dark:invert"
        />

        <div className="mt-8 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = (href) => {
              if (href === "/") {
                return pathname === "/"; // exact match seulement
              }
              return pathname.startsWith(href);
            };
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                  ${
                    isActive(link.href)
                      ? "text-red-500 bg-red-500/10"
                      : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }
                `}
              >
                {/* barre active animée */}
                <span
                  className={`
                    absolute left-0 top-0 h-full w-1 rounded-r bg-red-500 transition-all duration-300
                    ${isActive(link.href) ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
                  `}
                />

                <Icon size={22} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
