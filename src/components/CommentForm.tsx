"use client";
import { Button, TextArea } from "@radix-ui/themes";
import Avatar from "./Avatar";
import { postComment } from "@/actions";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { ClipLoader } from "react-spinners";

export default function CommentForm({
  avatar,
  postId,
}: {
  avatar: string;
  postId: string;
}) {
  const router = useRouter();
  const { pending } = useFormStatus();
  return (
    <form
      action={async (data) => {
        await postComment(data);
        router.refresh();
      }}
    >
      <input
        type="hidden"
        name="postId"
        value={postId}
      />
      <div className="flex gap-2">
        <div>
          <Avatar src={avatar} />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <TextArea
            name="text"
            placeholder="Tell the worl what  u think..."
          />

          <div>
            <Button>
              {pending ? (
                <div className="flex justify-center items-center w-32">
                  <ClipLoader
                    size={16}
                    color="white"
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center w-32">
                  Post Comment
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
