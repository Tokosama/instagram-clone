"use client";
import { likePost, removeLikeFromPost } from "@/actions";
import { Like, Post } from "@prisma/client";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LikesInfo({
  post,
  sessionLike,
  showText = true,
}: {
  post: Post;
  sessionLike?: Like | null;
  showText?: boolean;
}) {
  const router = useRouter();
  const [likedByMe, setLikedByMe] = useState(!!sessionLike);

  return (
    <>
      {" "}
      <form
        action={async (data: FormData) => {
          setLikedByMe((prev) => !prev);
          if (likedByMe) {
            await removeLikeFromPost(data);
          } else {
            await likePost(data);
          }
          router.refresh();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="hidden"
          name="postId"
          value={post.id}
        />
        <button
          className={""}
          type="submit"
        >
          <Heart className={likedByMe ? "text-red-500  fill-red-500" : "dark:text-white"} />
        </button>
        {showText && <p>{post.likesCount} people like this</p>}
      </form>
    </>
  );
}
