import { useGetCurrentRideQuery } from "@/redux/features/ride/ride.api";
import { BikeIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const SwitchRide = () => {
  const { data, isLoading } = useGetCurrentRideQuery(undefined);

  if (!isLoading && data) {
    return (
      <div title="Current Ride" className="fixed bottom-4 right-20 z-50">
        <Button asChild>
          <Link to="/ride">
            <BikeIcon />
          </Link>
        </Button>
      </div>
    );
  }
};

export default SwitchRide;
