import { getSessionEmailOrThrow } from "@/actions";
import { prisma } from "@/db";
import { Follower, Profile } from "@prisma/client";
import { Avatar } from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";

export default async function HomeToRow({
  follows,
  profiles,
}: {
  follows: Follower[];
  profiles: Profile[];
}) {
  return (
    <div className="flex gap-3 lg:justify-center max-w-full overflow-x-auto">
      <div>
        <button className="size-[92px]  bg-gradient-to-tr from-ig-orange to-ig-red text-white flex items-center justify-center rounded-full">
          <PlusIcon size={"42"} />
        </button>
        <p className="text-center text-gray-400 text-sm">New Story</p>
      </div>
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className=" w-24  flex justify-center flex-col items-center "
        >
          <div>
            <div className=" inline-block p-1  bg-gradient-to-tr from-ig-orange to-ig-red rounded-full">
              <div className=" inline-block p-0.5  bg-white rounded-full">
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
        </div>
      ))}{" "}
    </div>
  );
}
