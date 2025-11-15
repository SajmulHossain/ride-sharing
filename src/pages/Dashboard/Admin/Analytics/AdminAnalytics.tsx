import { useGetAdminAnalyticsQuery } from "@/redux/features/analytics/analytics.api";
import type { IRevenueTrend, IRideVolume } from "@/types";
import { RideVolume } from "./RideVolume";
import { RevenuTrend } from "./RevenuTrend";

const AdminAnalytics = () => {
  const {data:analytics} = useGetAdminAnalyticsQuery(undefined);


  return (
    <section className="section space-y-8">
      <RideVolume data={analytics?.rideVolume as IRideVolume[]} />

      <RevenuTrend data={analytics?.revenueTrend as IRevenueTrend[]} />
    </section>
  );
};

export default AdminAnalytics;