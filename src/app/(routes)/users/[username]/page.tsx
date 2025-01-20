import { getSessionEmail } from "@/actions";
import ProfilePageContent from "@/components/ProfilePageContent";
import { prisma } from "@/db";

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ username?: string }>;
}) {
  const username = (await params).username;

  const profile = await prisma.profile.findFirstOrThrow({
    where: { username: username },
  });
  const ourFollow = await prisma.follower.findFirst({
    where: {
      followingProfileEmail: (await getSessionEmail()) || "",
      followingProfileId: profile.id,
    },
  });
  return (
    <div>
      <ProfilePageContent
        ourFollow={ourFollow}
        profile={profile}
      />
    </div>
  );
}
