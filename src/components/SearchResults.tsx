import { prisma } from "@/db";
import { Avatar } from "@radix-ui/themes";
import Link from "next/link";
import PostsGrid from "./PostsGrid";

export default async function SearchResults({ query }: { query?: string }) {
  const profiles = await prisma.profile.findMany({
    where: {
      OR: [
        {
          username: { contains: query },
        },
        {
          name: { contains: query },
        },
      ],
    },
    take: 10,
  });
  const posts = await prisma.post.findMany({
    where: {
      description: { contains: query },
    },
    take: 100,
  });
  return (
    <div>
      <h1 className="text-lg mt-4 "> Result for {query}</h1>
      {profiles?.length > 0 && (
        <div className="grid mt-4 sm:grid-cols-2  gap-2 ">
          {profiles.map((profile) => (
            <Link
              href={`/users/${profile.username}`}
              className="flex gap-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 p-2 rounded-full"
              key={profile.id}
            >
              <div className="">
                <Avatar
                  size="4"
                  radius="full"
                  fallback="user Avatar"
                  src={profile.avatar || ""}
                />
              </div>
              <div>
                <h3>{profile.name}</h3>
                <h4 className="text-gray-500 dark:text-gray-500 text-sm">@{profile.username}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-4">
        <PostsGrid posts={posts} />
      </div>
    </div>
  );
}
