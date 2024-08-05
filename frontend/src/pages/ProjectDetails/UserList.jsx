import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3">{"Niraj" || "unassignee"}</p>
        </div>
        {[1, 1, 1, 1].map((item) => (
          <div
            key={item}
            className="py-2 group hover: bg-slate-800 cursor-pointer flex
          items-center space-x-4 rounded-md border px-4"
          >
            <Avatar>
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">Niraj Shaha</p>
              <p className="text-sm leading-none text-muted-foreground">
                @nirajshaha
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
