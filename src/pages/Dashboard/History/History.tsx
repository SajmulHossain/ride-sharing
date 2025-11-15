import Heading from "@/components/common/Heading";
import NoData from "@/components/common/NoData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetRideHistoryQuery } from "@/redux/features/ride/ride.api";
import { format } from "date-fns";
import {
  CarIcon,
  ClockIcon,
  GlobeIcon,
  MoveDown,
  MoveRight,
} from "lucide-react";

const History = () => {
  const { data, isLoading } = useGetRideHistoryQuery(undefined);
  return (
    <section className="section">
      <Heading
        heading="Rides History"
        description="View all your previous rides and their details here."
      />

      {isLoading ? (
        <HistorySkeleton />
      ) : data?.data?.history.length ? (
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
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default History;

const HistorySkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <Card key={index}>
        <CardContent>
          <div className="flex justify-between flex-col sm:flex-row gap-4">
            <Card className="w-full">
              <CardHeader>
                <Skeleton className="h-5 w-20" />
              </CardHeader>
              <Separator />
              <CardContent className="space-y-2">
                <div className="flex gap-2 flex-wrap items-center">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </CardContent>
            </Card>

            <div className="grid place-items-center">
              <CardHeader>
                <Skeleton className="h-6 w-6" />
              </CardHeader>
            </div>

            <Card className="w-full">
              <CardHeader>
                <Skeleton className="h-5 w-20" />
              </CardHeader>
              <Separator />
              <CardContent className="space-y-2">
                <div className="flex gap-2 flex-wrap items-center">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);