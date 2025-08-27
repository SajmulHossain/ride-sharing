import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { IUser } from "@/types";
import UserSuspend from "./UserSuspend";

const UserTable = ({ data, role } : {data: IUser[], role: string}) => {
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          {role === "driver" && <TableHead>Status</TableHead>}
          {role === "driver" && <TableHead>Active</TableHead>}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ name, email, driverApprovalStatus, isDriverActive, isBlocked }) => (
          <TableRow>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>{email}</TableCell>
            {role === "driver" && (
              <TableCell
                className={cn("capitalize", {
                  "text-primary": driverApprovalStatus === "approve",
                  "text-destructive": driverApprovalStatus === "suspend",
                })}
              >
                {driverApprovalStatus}d
              </TableCell>
            )}
            {role === "driver" && (
              <TableCell
                className={cn("capitalize", {
                  "text-primary": isDriverActive,
                  "text-destructive": !isDriverActive,
                })}
              >
                {isDriverActive ? "Active" : "Inactive"}
              </TableCell>
            )}
            <TableCell className="text-right">
              <UserSuspend
                role={role}
                driverApprovalStatus={driverApprovalStatus}
                isBlockedRider={isBlocked}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
