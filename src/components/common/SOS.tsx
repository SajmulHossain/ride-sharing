import { CircleAlertIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useGetCurrentRideQuery } from "@/redux/features/ride/ride.api";

const SOS = () => {
  const { data, isLoading } = useGetCurrentRideQuery(undefined);
  if(!isLoading && data) {
    return (
      <Button
        title="Emergency"
        variant={"destructive"}
        className="fixed bottom-4 right-6"
      >
        <CircleAlertIcon />
      </Button>
    );
  }
};

export default SOS;