'use client'
import { Button, TextArea } from "@radix-ui/themes";
import Avatar from "./Avatar";
import { postComment } from "@/actions";
import { useRouter } from "next/navigation";


export default function CommentForm({avatar,postId}:{avatar:string; postId:string }) {
    const router = useRouter(); 
  return (
    <form action={async data =>{
        await postComment(data);
        router.refresh()
    }}>
        <input type="hidden" name="postId" value={postId} />
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
            <Button>Post Comment</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
