import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetRequestedRideQuery, useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api";
import { sendResponse } from "@/utils/sendResponse";
import { LoaderPinwheelIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface IProps {
  id: string;
  fn: () => void
}

const Ride = () => {
    const { data, isLoading } = useGetRequestedRideQuery(undefined);
    const [updateStatus, {isLoading:isUpdating}] = useUpdateRideStatusMutation();

    if(isLoading) {
        return 
    }

    const state = data?.status[data.status.length - 1]?.state
    
    switch (state) {
        case "requested":
           return <Requested fn={updateStatus} id={data?._id} />;
    
        default:
            break;
    }
};

export default Ride;

const Requested = ({fn, id}: IProps) => {
  const navigate = useNavigate();
  const handleCancelRide = async () => {
    await sendResponse(() => fn({ id, status: "cancelled" }), "Ride cancel", () => navigate('/request-ride'));
  }
    return (
      <section className="section">
        <Card>
          <Heading
            heading="Requested"
            description="Your ride request has been sent. Please wait for the driver to approve."
          />

          <div className="grid place-items-center">
            <LoaderPinwheelIcon className="animate-spin" />
            <Button variant={"outline"} className="mt-8" onClick={handleCancelRide}>Cancel Ride</Button>
          </div>
        </Card>
      </section>
    );
}