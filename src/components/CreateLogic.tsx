"use client";
import { postEntry } from "@/actions";
import { Button, TextArea } from "@radix-ui/themes";
import { CloudUpload, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function CreateLogic() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const fileInRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // upload image
  useEffect(() => {
    if (file) {
      setIsUploading(true);
      const data = new FormData();
      data.set("file", file);

      fetch("/api/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((url) => setImageUrl(url))
        .catch(() => setError("Upload failed"))
        .finally(() => setIsUploading(false));
    }
  }, [file]);

  // submit
  async function handleSubmit(formData: FormData) {
    setError("");

    if (!imageUrl) return setError("Please upload an image");

    if (!description.trim()) return setError("Description cannot be empty");

    try {
      const id = await postEntry(formData);
      router.push(`/posts/${id}`);
      router.refresh();
    } catch {
      setError("Failed to publish post");
    }
  }

  return (
    <form
      className="max-w-md mx-auto"
      action={handleSubmit}
    >
      <input
        type="hidden"
        name="image"
        value={imageUrl || ""}
      />

      <div className="flex flex-col gap-4">
        {/* image box */}
        <div className="min-h-64 p-2 bg-gray-400 rounded-md relative">
          {imageUrl && (
            <img
              src={imageUrl}
              className="rounded-md"
              alt="preview"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <input
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              type="file"
              className="hidden"
              ref={fileInRef}
            />

            <Button
              disabled={isUploading}
              type="button"
              variant="surface"
              onClick={() => fileInRef.current?.click()}
            >
              {!isUploading ? (
                <CloudUpload size={16} />
              ) : (
                <ClipLoader
                  size={16}
                  color="#3E63DD"
                />
              )}
              {isUploading ? "Uploading..." : "Choose Image"}
            </Button>
          </div>
        </div>

        {/* textarea */}
        <TextArea
          name="description"
          className="h-24"
          placeholder="Add photo description ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* error message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>

      {/* submit */}
      <div className="flex mt-4 justify-center">
        <Button
          disabled={isUploading}
          className=""
        >
          {!isUploading ? (
            <div className="flex gap-2 items-center">
              <SendIcon size={16} />
              Publish
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-center w-20">
              <ClipLoader
                size={16}
                color="white"
              />
            </div>
          )}
        </Button>
      </div>
    </form>
  );
}
