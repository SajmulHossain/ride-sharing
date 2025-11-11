import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { rideStatus } from "@/constant/rideStatus";
import { useGetActiveStatusQuery } from "@/redux/features/driver/driver.api";
import { rideApi, useGetAvailableRidesQuery, useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api";
import { useAppDispatch } from "@/redux/hook";
import { sendResponse } from "@/utils/sendResponse";
import { format } from "date-fns";
import { Link } from "react-router";

const AvailableRequest = () => {
  const { data, isLoading: isActive } = useGetActiveStatusQuery(undefined);
  const { data: rides, isLoading } = useGetAvailableRidesQuery(undefined);
  const dispatch = useAppDispatch();

  const [updateStatus, { isLoading: isUpdating}] = useUpdateRideStatusMutation();

  if (isLoading) {
    return <>Loading</>;
  }

  if (!isActive && !data) {
    return (
      <section className="section">
        <Heading
          heading="You're not active"
          description="You cannot see available ride"
        />
      </section>
    );
  }

  if (!rides || !rides.length) {
    return <div>No data found</div>;
  }

  const handleAcceptRide = async (id: string) => {
      await sendResponse(()=> updateStatus({id, status: rideStatus.accepted}), 'Ride ' + rideStatus.accepted);

      dispatch(rideApi.util.resetApiState());
  }

  return (
    <section className="section">
      <div className="space-y-4">
        {rides?.map(({ pickup, destination, status, amount, rider, _id }) => (
          <Card key={_id}>
            <CardContent>
              <div className="flex justify-between gap-4">
                <Card className="w-full">
                  <CardContent>
                    <p>
                      <span className="font-medium italic">From</span>:{" "}
                      {pickup.place_name}
                    </p>
                    <div className="size-2 mx-auto my-1 bg-primary rounded-full"></div>
                    <p>
                      <span className="font-medium italic">To</span>:{" "}
                      {destination.place_name}
                    </p>
                    <Separator className="mt-2" />
                    <h2 className="mt-2 text-2xl font-medium">
                      Amount: BDT {amount}
                    </h2>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {status.map(({ state, createdAt }) => (
                        <div className="border rounded-2xl py-2 px-4">
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
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Rider</CardTitle>
                  </CardHeader>
                  <Separator />
                  <CardContent className="h-full flex flex-col justify-between">
                    <h2 className="font-bold text-2xl">{rider.name}</h2>
                    <CardDescription className="flex flex-col mt-2 justify-start grow">
                      <Button
                        className="w-fit p-0 h-fit"
                        asChild
                        variant={"link"}
                      >
                        <Link to={`tel:${rider.phone}`} className="italic">
                          {rider.phone}
                        </Link>
                      </Button>
                      <Button
                        className="w-fit p-0 h-fit"
                        asChild
                        variant={"link"}
                      >
                        <Link to={`mailto:${rider.email}`} className="italic">
                          {rider.email}
                        </Link>
                      </Button>
                    </CardDescription>
                    <Button disabled={isUpdating} className="mt-4" onClick={() => handleAcceptRide(_id as string)}>Accept Ride</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AvailableRequest;
