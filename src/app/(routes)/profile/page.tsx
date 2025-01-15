import { CheckIcon, ChevronLeft, Cog } from "lucide-react";

export default function ProfilePage() {
  return (
    <main>
      <div className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>
        <div className="font-bold flex items-center gap-2">
          my_name is jhon
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16}/>{" "}
          </div>
        </div>
        <button>
          <Cog />{" "}
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </main>
  );
}
