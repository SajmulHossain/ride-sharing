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

      <UserTable data={users} role={role} isLoading={isLoading} />

      <Pagination meta={meta} />
    </div>
  );
};

export default Users;