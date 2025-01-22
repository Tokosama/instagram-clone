import { Follower, Profile } from "@prisma/client";
import { CheckIcon, ChevronLeft, Cog } from "lucide-react";
import Link from "next/link";
import FollowButton from "./FollowButton";

export default function ProfilePageInfo({
  profile,
  isOurProfile,
  ourFollow,
}: {
  profile: Profile;
  isOurProfile: boolean;
  ourFollow: Follower |null;
}) {
  return (
    <div>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="font-bold flex items-center gap-2">
          {profile.username}
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />{" "}
          </div>
        </div>

        <div>
          {isOurProfile && (
            <Link href="/settings">
              <Cog />{" "}
            </Link>
          )}
        </div>
      </section>
      <section className="mt-8 flex justify-center">
        <div className="size-48 p-2  bg-gradient-to-tr from-ig-orange to-ig-red rounded-full">
          <div className="size-44 p-2  bg-white dark:bg-black rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                className="l"
                src={profile.avatar || ""}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-2">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p className="text-gray-500 mt-1 mb-1">{profile.subtitle}</p>
        <p className="">{profile.bio}</p>
      </section>

      {!isOurProfile && (
        <section className="flex justify-center my-4">
          <FollowButton
            ourFollow={ourFollow}
            profileIdToFollow={profile.id}
          />
        </section>
      )}
    </div>
  );
}