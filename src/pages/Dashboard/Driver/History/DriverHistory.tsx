import CommonRide from "@/components/common/CommonRide";
import Heading from "@/components/common/Heading";
import NoData from "@/components/common/NoData";
import { useGetDriverHistoryQuery } from "@/redux/features/driver/driver.api";

const DriverHistory = () => {
  const { data: rides } = useGetDriverHistoryQuery(undefined);
  console.log(rides);
  return (
    <section className="section">
      <Heading
        heading="Driver History"
        description="Your all completed rides"
      />

      {rides?.length ? (
        <div className="space-y-4">
          {rides?.map((ride) => (
            <CommonRide key={ride?._id} ride={ride} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default DriverHistory;
