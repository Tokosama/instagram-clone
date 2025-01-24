import { auth,  } from "@/auth";
import Preloader from "@/components/Preloader";
import UserHome from "@/components/UserHome";
import LoginInterface from "@/components/LoginInterface";

import { Suspense } from "react";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="h-full">
        {session && (
          <Suspense fallback={<Preloader /> }>
            <UserHome session={session} />
          </Suspense>
        )}

        {!session && (

          <LoginInterface/>
          // <form
          //   action={async () => {
          //     "use server";
          //     await signIn("google");
          //   }}
          // >
          //   {" "}
          //   <button
          //     className="border px-4 py-2 bg-ig-red rounded-lg"
          //     type="submit"
          //   >
          //     Signin with Google
          //   </button>
          // </form>
        )}
      </div>
    </>
  );
}
