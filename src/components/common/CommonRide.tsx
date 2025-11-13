import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import type { IRide } from "@/types";
import { Button } from "../ui/button";
import { rideStatus } from "@/constant/rideStatus";
import { useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api";
import { sendResponse } from "@/utils/sendResponse";
import { userRole } from "@/constant/userRole";

const CommonRide = ({ ride }: { ride: IRide }) => {
  const { data: user } = useGetMeQuery(undefined);
  const { _id, amount, destination, pickup, status, rider } = ride || {};
  const [updateStatus, { isLoading }] = useUpdateRideStatusMutation();

  const currentRideStatus = Object.values(rideStatus).splice(
    ride?.status.length,
    1
  )[0];

  const handleUpdateStatus = () => {
    sendResponse(
      () => updateStatus({ id: _id, status: currentRideStatus }),
      "Ride " + currentRideStatus
    );
  };
  
  return (
    <Card>
      <CardContent>
        <Badge className="mb-2">
          {user?.email === rider ? "You was rider" : "You was driver"}
        </Badge>
        <p>From: {pickup?.place_name}</p>
        <p>To: {destination?.place_name}</p>

        <h2 className="mt-2 text-2xl font-medium">Amount: BDT {amount}</h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {status?.map(({ state, createdAt }, index) => (
            <div key={index} className="border rounded-2xl py-2 px-4">
              <p className="capitalize mb-2">{state}</p>
              <p>
                <Badge variant="secondary">
                  {format(
                    new Date(createdAt || new Date()),
                    "MMMM d, yyyy 'at' h:mm a"
                  )}
                </Badge>
              </p>
            </div>
          ))}
        </div>
        {user?.role === userRole.driver && currentRideStatus !== 'cancelled' && (
          <Button
            disabled={isLoading}
            onClick={handleUpdateStatus}
            className="mt-4"
          >
            Change to <span className="capitalize">{currentRideStatus}</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CommonRide;
