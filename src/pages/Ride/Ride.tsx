import CommonRide from "@/components/common/CommonRide";
import Heading from "@/components/common/Heading";
import NoData from "@/components/common/NoData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  useGetRequestedRideQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/ride/ride.api";
import type { IRide } from "@/types";
import { sendResponse } from "@/utils/sendResponse";
import { LoaderPinwheelIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface IProps {
  fn: <T>() => { unwrap: { (): Promise<T> } };
  isLoading: boolean;
}

const Ride = () => {
  const { data, isLoading } = useGetRequestedRideQuery(undefined);
  const [updateStatus, { isLoading: isUpdating }] =
    useUpdateRideStatusMutation();

  if (isLoading) {
    return;
  }

  const state = data?.status[data.status.length - 1]?.state;

  if (state === "requested") {
    return (
      <Requested
        isLoading={isUpdating}
        fn={() => updateStatus({ id: data?._id, status: "cancelled" })}
      />
    );
  }

  return (
    <section className="section">
      {data ? (
        <CommonRide ride={data as IRide} />
      ) : (
        <>
          <Heading heading="You are not in ride" />
          <NoData />
        </>
      )}
    </section>
  );
};

export default Ride;

const Requested = ({ fn, isLoading }: IProps) => {
  const navigate = useNavigate();
  const handleCancelRide = async () => {
    await sendResponse(
      () => fn(),
      "Ride cancel",
      () => navigate("/request-ride")
    );
  };
  return (
    <section className="section">
      <Card>
        <Heading
          heading="Requested"
          description="Your ride request has been sent. Please wait for the driver to approve."
        />

        <div className="grid place-items-center">
          <LoaderPinwheelIcon className="animate-spin" />
          <Button
            disabled={isLoading}
            variant={"outline"}
            className="mt-8"
            onClick={handleCancelRide}
          >
            Cancel Ride
          </Button>
        </div>
      </Card>
    </section>
  );
};
