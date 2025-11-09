import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useGetActiveStatusQuery } from "@/redux/features/driver/driver.api";
import { useGetAvailableRidesQuery } from "@/redux/features/ride/ride.api";
import { format } from "date-fns";

const AvailableRequest = () => {
  const { data, isLoading: isActive } = useGetActiveStatusQuery(undefined);
  const { data:rides, isLoading } = useGetAvailableRidesQuery(undefined);

  console.log(rides);

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

  if(!rides || !rides.length) {
    return <div>No data found</div>
  }

  return (
    <section className="section">
      {rides.map(({pickup, destination, createdAt, status, amount, rider, driver, _id}) => (
        <Card key={_id}>
          <CardContent>
            <p>From: {pickup.place_name}</p>
            <p>To: {destination.place_name}</p>

            <h2 className="mt-2 text-2xl font-medium">Amount: BDT {amount}</h2>

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
    </section>
  );
};

export default AvailableRequest;
