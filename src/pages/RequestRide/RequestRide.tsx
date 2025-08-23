import Heading from "@/components/Heading";
import RideRequestForm from "./RideReqForm";

const RequestRide = () => {
  return (
    <section className="section">
      <Heading heading="Request a Ride" description="Fill out the form below to request a ride easily and quickly." />
      <RideRequestForm />
    </section>
  );
};

export default RequestRide;