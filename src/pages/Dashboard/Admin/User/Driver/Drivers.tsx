import Heading from "@/components/common/Heading";
import { useGetUsersQuery } from "@/redux/features/user/user.api";
import { useSearchParams } from "react-router";
import Users from "../Users";
import type { IMeta } from "@/types";

const Drivers = () => {
  const [searchParams] = useSearchParams();
  const driverApprovalStatus = searchParams.get("driverApprovalStatus") || undefined;
  const search = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || "1";

  const { data, isLoading } = useGetUsersQuery({
    role: "driver",
    driverApprovalStatus,
    search,
    page,
    fields: "_id"
  });

  return (
    <section className="section w-full">
      <Heading heading="Drivers" />

      <Users users={data?.data || []} meta={data?.meta as IMeta} isLoading={isLoading} role="driver" />
    </section>
  );
};

export default Drivers;
