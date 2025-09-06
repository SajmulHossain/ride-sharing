import { useGetRequestedRideQuery } from "@/redux/features/ride/ride.api";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { BikeIcon } from "lucide-react";

const SwitchRide = () => {
  const { data, isLoading } = useGetRequestedRideQuery(undefined);
  console.log(data);

  if (!isLoading && !data) {
    return (
      <div title="Current Ride" className="fixed bottom-4 right-4 z-50">
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
