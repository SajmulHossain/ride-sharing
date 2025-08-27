import Heading from "@/components/Heading";
import { useGetUsersQuery } from "@/redux/features/user/user.api";
import { useSearchParams } from "react-router";
import Users from "../Users";

const Drivers = () => {
  const [searchParams] = useSearchParams();
  const driverApprovalStatus = searchParams.get("driverApprovalStatus") || undefined;
  const search = searchParams.get("search") || undefined;

  const { data, isLoading } = useGetUsersQuery({
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
