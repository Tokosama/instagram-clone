import { auth } from "@/auth";
import Preloader from "@/components/Preloader";
import UserHome from "@/components/UserHome";
import LoginInterface from "@/components/LoginInterface";
//import "@/lib/keepMongooAlive";
import { Suspense } from "react";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="h-full">
        {session && (
          <Suspense fallback={<Preloader />}>
            <UserHome session={session} />
          </Suspense>
        )}

        {!session && (
          <LoginInterface />
          
        )}
      </div>
    </>
  );
}
