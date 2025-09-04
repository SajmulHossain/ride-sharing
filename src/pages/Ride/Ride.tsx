import { useGetRequestedRideQuery } from "@/redux/features/ride/ride.api";

const Ride = () => {
    const { data, isLoading } = useGetRequestedRideQuery(undefined);
    console.log(data);

    if(isLoading) {
        return 
    }
    
  return (
    <section className="section">
      <h1>This is Ride component</h1>
    </section>
  );
};

export default Ride;