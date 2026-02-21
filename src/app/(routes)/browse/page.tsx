import PostsGrid from "@/components/PostsGrid";
import { prisma } from "@/db";
import LoginInterface from "@/components/LoginInterface";
import { auth } from "@/auth";
import { Suspense } from "react";
import Preloader from "@/components/Preloader";

export default async function BrowsePgae() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  const session = await auth();

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="h-full">
          {session && (
            <div>
              <div className="mb-4">
                <PostsGrid posts={posts} />
              </div>
            </div>
          )}

          {!session && <LoginInterface />}
        </div>
      </Suspense>
    </>
  );
}
