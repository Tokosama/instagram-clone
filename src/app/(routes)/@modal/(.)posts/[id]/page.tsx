import { getSinglePostData } from "@/actions";
import Modal from "@/components/Modal";
import SinglePostContent from "@/components/SinglePostContent";

export default async function PostModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { post, authorProfile, comments, commentsAuthors, myLike } =
    await getSinglePostData(id);

  return (
  <Modal>
      <SinglePostContent
               post={post}
               authorProfile={authorProfile}
               comments={comments}
               commentsAuthors={commentsAuthors}
               myLike={myLike}
             />
  </Modal>
  );
}
