import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useGetRidesQuery } from "@/redux/features/ride/ride.api";
import { format } from "date-fns";

const Rides = () => {
  const { data: rides } = useGetRidesQuery(undefined);
  const {data:user} = useGetMeQuery(undefined);

  return (
    <section className="section">
      <Heading
        heading="All Rides"
        description="View and manage all your rides in one place."
      />

      <div className="space-y-4">
        {rides?.map(({ amount, destination, pickup, status, rider }) => (
          <Card>
            <CardContent>
            <Badge className="mb-2">{user?.email === rider ? "You was rider" : "You was driver"}</Badge>
              <p>From: {pickup.place_name}</p>
              <p>To: {destination.place_name}</p>

              <h2 className="mt-2 text-2xl font-medium">Amount:  BDT {amount}</h2>

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
        ))}
      </div>
    </section>
  );
};

export default Rides;
