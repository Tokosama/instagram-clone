import { auth, signIn } from "@/auth";
import UserHome from "@/components/UserHome";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="">
        {session && (
         <UserHome session={session}/>
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
