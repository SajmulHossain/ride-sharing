import CommonRide from "@/components/common/CommonRide";
import Heading from "@/components/common/Heading";
import { useGetRidesQuery } from "@/redux/features/ride/ride.api";

const Rides = () => {
  const { data: rides } = useGetRidesQuery(undefined);

  return (
    <section className="section">
      <Heading
        heading="All Rides"
        description="View and manage all your rides in one place."
      />

      <div className="space-y-4">
        {rides?.map((ride) => (
          <CommonRide ride={ride} key={ride._id} />
        ))}
      </div>
    </section>
  );
};

export default Rides;
