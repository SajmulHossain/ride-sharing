import { useGetAdminAnalyticsQuery } from "@/redux/features/analytics/analytics.api";
import { RideVolume } from "./RideVolume";
import type { IRideVolume } from "@/types";

const AdminAnalytics = () => {
  const {data:analytics} = useGetAdminAnalyticsQuery(undefined);


  return (
    <section className="section">
      <RideVolume data={analytics?.rideVolume as IRideVolume[]} />
    </section>
  );
};

export default AdminAnalytics;