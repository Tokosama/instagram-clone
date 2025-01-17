"use client";

import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: Profile;
}) {
  const router = useRouter();
  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);
        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-4 items-center">
        Avatar
        <div className="">
          <div className="bg-gray-200 size-24 rounded-full"></div>
        </div>
        <div className="">
          <Button variant="surface">
            <UploadCloudIcon />
            Change Avatar
          </Button>
        </div>
      </div>
      <p className="mt-2 font-bold"> username:</p>
      <TextField.Root
        name="username"
        defaultValue={profile.username || ''}
        placeholder="your_username"
      />
      <p className="mt-2 font-bold"> name: </p>
      <TextField.Root
        name="name"
        defaultValue={profile.name || ''}

        placeholder="Jhon Doe"
      />
      <p className="mt-2 font-bold"> subtitle: </p>
      <TextField.Root
        defaultValue={profile.subtitle || ''}
        name="subtitle"
        placeholder="Graphic designer"
      />
      <p className="mt-2 font-bold"> bio: </p>
      <TextArea name="bio"
        defaultValue={profile.bio || ''}
        />
      <div className="mt-4 flex justify-center">
        <Button variant={"solid"}>Save Settings</Button>
      </div>
    </form>
  );
}
