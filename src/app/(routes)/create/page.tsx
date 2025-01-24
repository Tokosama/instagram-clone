import CreateLogic from  "@/components/CreateLogic";
import { auth } from "@/auth";
import LoginInterface from "@/components/LoginInterface";

export default async function CreatePage() {
  const session = await auth();

  return (
  <>
      <div className="h-full">
        {session && (
          <CreateLogic/>
        )}

        {!session && <LoginInterface />}
      </div>
    </>
  );
}