import { auth } from "@/auth";
import ProfilePageContent from "@/components/ProfilePageContent";
import LoginInterface from "@/components/LoginInterface";

import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Preloader from "@/components/Preloader";
export default async function ProfilePage() {
  const session = await auth();
  const profile = await prisma.profile.findFirst({
    where: { email: session?.user?.email as string },
  });
  if (!profile) {
    return redirect("/settings");
  }
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className="h-full">
          {session && (
            <ProfilePageContent
              ourFollow={null}
              profile={profile}
              isOurProfile={true}
            />
          )}

          {!session && <LoginInterface />}
        </div>
      </Suspense>
    </>
  );
}
