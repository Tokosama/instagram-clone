'use server'
import { handleGoogleSignIn } from "@/actions";

export default async function Login() {
  

  return (
    <form
      className="w-100 flex justify-center align-middle items-center h-full"
      action={handleGoogleSignIn}
    >
      {" "}
      <button
        className="border px-4 py-2 bg-ig-red rounded-lg"
        type="submit"
      >
        Signin with Google
      </button>
    </form>
  );
}
