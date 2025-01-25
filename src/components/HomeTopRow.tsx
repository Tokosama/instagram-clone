import { Follower, Profile } from "@prisma/client";
import { Avatar } from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function HomeToRow({
//  follows,
  profiles,
}: {
  follows: Follower[];
  profiles: Profile[];
}) {
  return (
    <div className="flex gap-3 lg:justify-center max-w-full overflow-x-auto">
      <div>
        <Link href="/create" className="size-[92px]  bg-gradient-to-tr from-ig-orange to-ig-red text-white flex items-center justify-center rounded-full">
          <PlusIcon size={"42"} />
        </Link>
        <p className="text-center text-gray-400 text-sm">New Post</p>
      </div>
      {profiles.map((profile) => (
        <Link href={`/users/${profile.username}`}
          key={profile.id}
          className=" w-24  flex justify-center flex-col items-center "
        >
          <div>
            <div className=" inline-block p-1  bg-gradient-to-tr from-ig-orange to-ig-red rounded-full">
              <div className=" inline-block p-0.5  bg-white dark:bg-black rounded-full">
                <Avatar
                  size="6"
                  radius="full"
                  fallback={"avatar"}
                  src={profile.avatar || ""}
                />
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              {profile.username}
            </p>
          </div>
        </Link>
      ))}{" "}
    </div>
  );
}
