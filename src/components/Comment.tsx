import Avatar from "./Avatar";
import { Profile } from "@prisma/client";
import {format} from 'date-fns'
export default function Comment({
  text,
  createdAt,
  authorProfile,
}: {
  text: string;
  createdAt:Date;
  authorProfile?: Profile;
}) {
  return (
    <div className="flex gap-2 ">
      <div>
        <Avatar src={authorProfile?.avatar || ""} />
      </div>
      <div className="w-full">
        <div className="flex gap-2 justify-between">
          <div>
            <h3>{authorProfile?.name}</h3>
            <h4 className="text-gray-600 text-sm -mt-1">
              @{authorProfile?.username}
            </h4>
          </div>
        </div>

        <div>
          <div className="bg-gray-200 border border-gray-300 rounded-md p-4 mt-2 ">
            <p>{text}</p>
          </div>
          <div className="text-xs text-gray text-gray-400 text-right ">
            {format(createdAt, 'yyyy-MM-dd HH:mm:ss')}
          </div>
        </div>
      </div>
    </div>
  );
}
