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
import type { IUser, TRole } from "@/types";
import UserActionDropdown from "./UserActionDropdown";

const UserTable = ({ data, role }: { data: IUser[]; role: string }) => {
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          {role === "driver" && (
            <>
              <TableHead>Model No</TableHead>
              <TableHead>Reg No</TableHead> <TableHead>Active</TableHead>
            </>
          )}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(
          ({
            _id,
            name,
            email,
            driverApprovalStatus,
            isDriverActive,
            isBlocked,
            vehicleInfo,
          }) => (
            <TableRow key={_id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{email}</TableCell>
              {role === "driver" && (
                <>
                  <TableCell
                    className={cn("capitalize", {
                      "text-primary": driverApprovalStatus === "approve",
                      "text-destructive": driverApprovalStatus === "suspend",
                      "text-blue-700": driverApprovalStatus === "pending",
                    })}
                  >
                    {driverApprovalStatus}
                    {driverApprovalStatus === "approve"
                      ? "d"
                      : driverApprovalStatus === "suspend"
                      ? "ed"
                      : ""}
                  </TableCell>
                  <TableCell>{vehicleInfo?.model || "Not provider"}</TableCell>
                  <TableCell>
                    {vehicleInfo?.registration_no || "Not provider"}
                  </TableCell>
                </>
              )}
              {role === "driver" ? (
                <TableCell
                  className={cn("capitalize", {
                    "text-primary": isDriverActive,
                    "text-destructive": !isDriverActive,
                  })}
                >
                  {isDriverActive ? "Active" : "Inactive"}
                </TableCell>
              ) : (
                <TableCell
                  className={cn({
                    "text-destructive": isBlocked,
                    "text-green-600": !isBlocked,
                  })}
                >
                  {isBlocked ? "Blocked" : "Unblocked"}
                </TableCell>
              )}
              <TableCell className="text-right">
                {/* <UserAction
                  role={role}
                  driverApprovalStatus={driverApprovalStatus}
                  isBlockedRider={isBlocked}
                /> */}

                <UserActionDropdown
                  role={role as TRole}
                  driverApprovalStatus={driverApprovalStatus}
                  isBlockedRider={isBlocked}
                  id={_id as string}
                />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default UserTable;
