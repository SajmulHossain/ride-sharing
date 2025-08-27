import { CircleAlertIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function UserSuspend({
  role,
  driverApprovalStatus,
  isBlockedRider,
}: {
  role: string;
  driverApprovalStatus: string;
  isBlockedRider: boolean | undefined;
}) {

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={
            driverApprovalStatus === "approve" || !isBlockedRider
              ? "destructive"
              : "default"
          }
        >
          {role === "driver"
            ? driverApprovalStatus
              ? "Suspend"
              : "Approve"
            : isBlockedRider
            ? "Unblock"
            : "Block"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <CircleAlertIcon className="opacity-80" size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {role === "driver"
                ? driverApprovalStatus === "approve"
                  ? "Are you sure you want suspend the driver?"
                  : "Are you sure you want to approve the driver?"
                : isBlockedRider
                ? "Are you sure you want to unblock rider?"
                : "Are you sure you want to block the rider"}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>
              {role === "driver"
                ? driverApprovalStatus === "approve"
                  ? "Suspend"
                  : "Approve"
                : isBlockedRider
                ? "Unblock"
                : "Block"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
