import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloudIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-lg mx-auto">
<h1 className="text-2xl font-bold mb-4  text-center  ">Profile Settings</h1>
      <form action="">
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
        <TextField.Root placeholder="your_username" />
        <p className="mt-2 font-bold"> name: </p>
        <TextField.Root placeholder="Jhon Doe" />
        <p className="mt-2 font-bold"> subtitle: </p>
        <TextField.Root placeholder="Graphic designer" />
        <p className="mt-2 font-bold"> bio: </p>
        <TextArea />
        <div className="mt-4 flex justify-center">
          <Button variant={"solid"}>Save Settings</Button>
        </div>
      </form>
    </div>
  );
}
