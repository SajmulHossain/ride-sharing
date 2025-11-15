import Pagination from "@/components/Pagination";
import type { IMeta, IUser, TRole } from "@/types";
import UserFilter from "./UserFilter";
import UserTable from "./UserTable";

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
    <>
      <UserFilter role={role} />
      <UserTable data={users} role={role} isLoading={isLoading} />
      <Pagination meta={meta} />
    </>
  );
};

export default Users;