import { auth, signIn } from "@/auth";
import { signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="">
        test first commit
        <br />
        {session && (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            {" "}
            <button
              className="border px-4 py-2 bg-ig-red rounded-lg"
              type="submit"
            >
              SignOut with Google
            </button>
          </form>
        )}
        {!session && (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            {" "}
            <button
              className="border px-4 py-2 bg-ig-red rounded-lg"
              type="submit"
            >
              Signin with Google
            </button>
          </form>
        )}
      </div>
    </>
  );
}
