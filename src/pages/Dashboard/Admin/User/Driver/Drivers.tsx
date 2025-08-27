import Heading from "@/components/Heading";
import { useGetDriversQuery } from "@/redux/features/user/user.api";
import { useSearchParams } from "react-router";
import Users from "../Users";

const Drivers = () => {
  const [searchParams] = useSearchParams();
  const driverApprovalStatus = searchParams.get("driverApprovalStatus") || "";
  const search = searchParams.get("search") || "";

  const { data, isLoading } = useGetDriversQuery({
    role: "driver",
    driverApprovalStatus,
    search,
  });

  return (
    <section className="section w-full">
      <Heading heading="Drivers" />

      <Users users={data!} isLoading={isLoading} role="driver" />
    </section>
  );
};

export default Drivers;
