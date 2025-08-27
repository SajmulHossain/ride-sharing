import { Skeleton } from "@/components/ui/skeleton";
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";
import type { IUser, TRole } from "@/types";

const Users = ({
  users = [...Array(5)],
  isLoading,
  role,
}: {
  users: IUser[];
  isLoading: boolean;
  role: TRole;
}) => {
  return (
    <div>
      <UserFilter role={role} />
      {isLoading ? (
        <div className="space-y-2 w-full">
          {users.map((_, index) => (
            <Skeleton key={index} className="w-full h-10"></Skeleton>
          ))}
        </div>
      ) : (
        <>
          <UserTable data={users} role={role} />
        </>
      )}
    </div>
  );
};

export default Users;