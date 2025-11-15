import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useGetCurrentRideQuery } from "@/redux/features/ride/ride.api";
import { CircleAlertIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";

const SOS = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCurrentRideQuery(undefined);
  const { data: user } = useGetMeQuery(undefined);

  const handleNotify = () => {
    const toastId = toast.loading("Sending notification...");
    setTimeout(() => {
      toast.success("Notified to your contact", { id: toastId });
      setOpen(false);
    }, 2000);
  };

  if (!isLoading && data) {
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger>
          <Button
            title="Emergency"
            variant={"destructive"}
            className="fixed bottom-4 right-6 z-50"
          >
            <CircleAlertIcon />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Choose options!</AlertDialogTitle>
            <AlertDialogDescription>
              {user?.emergencyContact &&
                user?.emergencyContact +
                  " is your emergency contact. We will notify him and send your location."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            placeholder="Emergency contact"
            disabled
            defaultValue={user?.emergencyContact || ""}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <div className="flex items-center gap-2">
              <Button onClick={handleNotify}>
                Notify & Share Live Location
              </Button>
              <span className="text-2xl">|</span>
              <Button asChild onClick={() => setOpen(false)}>
                <a href="tel:999">Call Police</a>
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
};

export default SOS;
