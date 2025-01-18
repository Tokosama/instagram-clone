"use client";

import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: Profile;
}) {
  const router = useRouter();
  const fileInRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar);
  const [file, setFile] = useState<File>();
  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);
      fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        response.json().then((url) => {
          setAvatarUrl(url);
        });
      });
    }
  }, [file]);
  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data);
        router.push("/profile");
        router.refresh();
      }}
    >
      <input type="hidden" name="avatar" value={avatarUrl || ''} />
      <div className="flex gap-4 items-center">
        Avatar
        <div className="">
          <div className="bg-gray-200 size-24 rounded-full aspect-square border-2 overflow-hidden shadow-md shadow-gray-400 ">
            <img className=" " src={avatarUrl || ''} alt="" />
          </div>
        </div>
        <div className="">
          <input
            type="file"
            className="hidden"
            ref={fileInRef}
            onChange={(ev) => setFile(ev.target.files?.[0])}
          />
          <Button
            type="button"
            variant="surface"
            onClick={() => fileInRef.current?.click()}
          >
            <UploadCloudIcon />
            Change Avatar
          </Button>
        </div>
      </div>
      <p className="mt-2 font-bold"> username:</p>
      <TextField.Root
        name="username"
        defaultValue={profile.username || ""}
        placeholder="your_username"
      />
      <p className="mt-2 font-bold"> name: </p>
      <TextField.Root
        name="name"
        defaultValue={profile.name || ""}
        placeholder="Jhon Doe"
      />
      <p className="mt-2 font-bold"> subtitle: </p>
      <TextField.Root
        defaultValue={profile.subtitle || ""}
        name="subtitle"
        placeholder="Graphic designer"
      />
      <p className="mt-2 font-bold"> bio: </p>
      <TextArea
        name="bio"
        defaultValue={profile.bio || ""}
      />
      <div className="mt-4 flex justify-center">
        <Button variant={"solid"}>Save Settings</Button>
      </div>
    </form>
  );
}
