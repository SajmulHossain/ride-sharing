import { Skeleton } from "@/components/ui/skeleton";
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";
import type { IMeta, IUser, TRole } from "@/types";
import Pagination from "@/components/Pagination";

const Users = ({
  users = [...Array(5)],
  isLoading,
  role,
  meta
}: {
  users: IUser[];
  isLoading: boolean;
  role: TRole;
  meta: IMeta
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
      <Pagination meta={meta} />
    </div>
  );
};

export default Users;