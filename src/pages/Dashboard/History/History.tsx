import Heading from "@/components/Heading";
import { Alert } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetRideHistoryQuery } from "@/redux/features/ride/ride.api";
import { format } from "date-fns";
import { CarIcon, ClockIcon, GlobeIcon, MoveDown, MoveRight } from "lucide-react";

const History = () => {
  const { data } = useGetRideHistoryQuery(undefined);
  return (
    <section className="section">
      <Heading
        heading="Ride History"
        description="View all your previous rides and their details here."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.data?.history?.map(({ from, to }) => (
          <Card>
            <CardContent>
              <div className="flex justify-between flex-col sm:flex-row">
                <Card className="w-full">
                  <CardHeader>From</CardHeader>
                  <Separator />
                  <CardContent className="space-y-2">
                    <p className="flex gap-2 flex-wrap">
                      <CarIcon />
                      {from.place}
                    </p>
                    <p className="flex gap-2 flex-wrap">
                      <ClockIcon />
                      {format(new Date(from.at || new Date()), "PPP")}
                    </p>
                  </CardContent>
                </Card>
                <div className="grid place-items-center">
                  <CardHeader>
                    <MoveRight className="hidden sm:block" />
                    <MoveDown className="sm:hidden" />
                  </CardHeader>
                </div>
                <Card className="w-full">
                  <CardHeader>From</CardHeader>
                  <Separator />
                  <CardContent className="space-y-2">
                    <p className="flex gap-2 flex-wrap">
                      <GlobeIcon />
                      {to.place}
                    </p>
                    <p className="flex gap-2 flex-wrap">
                      <ClockIcon />
                      {format(new Date(to.at || new Date()), "PPP")}
                    </p>
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

export default History;
