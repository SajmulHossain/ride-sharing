import Heading from "@/components/Heading";
import { Card } from "@/components/ui/card";
import { useGetRequestedRideQuery } from "@/redux/features/ride/ride.api";

const Ride = () => {
    const { data, isLoading } = useGetRequestedRideQuery(undefined);

    if(isLoading) {
        return 
    }

    const state = data?.status[data.status.length - 1]?.state
    
    switch (state) {
        case "requested":
           return <Requested />;
    
        default:
            break;
    }
};

export default Ride;

const Requested = () => {
    return (
      <section className="section">
        <Card>
          <Heading
            heading="Requested"
            description="Your ride request has been sent. Please wait for the driver to approve."
          />
        </Card>
      </section>
    );
}