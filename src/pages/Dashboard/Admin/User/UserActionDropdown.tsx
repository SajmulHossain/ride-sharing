import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { TRole } from "@/types";
import { Menu } from "lucide-react";
import { useState } from "react";
import UserAction from "./UserActions";
import {
  useApproveDriverMutation,
  useBlockRiderMutation,
  useSuspendDriverMutation,
} from "@/redux/features/user/user.api";

const UserActionDropdown = ({
  role,
  driverApprovalStatus,
  isBlockedRider,
  id,
}: {
  role: TRole;
  driverApprovalStatus: string;
  isBlockedRider: boolean | undefined;
  id: string;
}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [fn, setFn] = useState<() => { unwrap: () => Promise<unknown> }>(
    () => ({
      unwrap: async () => {},
    })
  );
  const [block] = useBlockRiderMutation();
  const [approve] = useApproveDriverMutation();
  const [suspend] = useSuspendDriverMutation();

  const handleApprove = () => {
    setOpen(true);
    setText("approve");
    setFn(() => () => approve(id));
  };
  const handleSuspend = () => {
    setOpen(true);
    setText("suspend");
    setFn(() => () => suspend(id));
  };
  const handleUserBlock = () => {
    setOpen(true);
    setText(isBlockedRider ? "unblock" : "block");
    setFn(() => () => block(id));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Take Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {role === "driver" &&
          (driverApprovalStatus === "approve" ||
            driverApprovalStatus === "pending") && (
            <DropdownMenuItem>
              <Button
                onClick={handleSuspend}
                className="w-full"
                variant={"destructive"}
              >
                Suspend
              </Button>
            </DropdownMenuItem>
          )}
        {role === "driver" &&
          (driverApprovalStatus === "suspend" ||
            driverApprovalStatus === "pending") && (
            <DropdownMenuItem>
              <Button onClick={handleApprove} className="w-full">
                Approve
              </Button>
            </DropdownMenuItem>
          )}
        {role === "rider" && (
          <DropdownMenuItem>
            <Button
              onClick={handleUserBlock}
              className="w-full"
              variant={isBlockedRider ? "default" : "destructive"}
            >
              {isBlockedRider ? "Unblock" : "Block"}
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
      <UserAction
        fn={fn}
        text={text}
        open={open}
        setOpen={setOpen}
        role={role}
      />
    </DropdownMenu>
  );
};

export default UserActionDropdown;
