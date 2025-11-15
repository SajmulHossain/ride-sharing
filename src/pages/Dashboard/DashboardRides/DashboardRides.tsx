import CommonRide from "@/components/common/CommonRide";
import CommonRideSkeleton from "@/components/common/CommonRideSkeleton";
import Heading from "@/components/common/Heading";
import NoData from "@/components/common/NoData";
import { useGetRidesQuery } from "@/redux/features/ride/ride.api";

const Rides = () => {
  const { data: rides, isLoading } = useGetRidesQuery(undefined);

  return (
    <section className="section">
      <Heading
        heading="All Rides"
        description="View and manage all your rides in one place."
      />

      {isLoading ? <CommonRideSkeleton /> :rides?.length ? (
        <div className="space-y-4">
          {rides?.map((ride) => (
            <CommonRide ride={ride} key={ride._id} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default Rides;
