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
        <div>Requested</div>
    )
}