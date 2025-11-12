import Heading from "@/components/common/Heading";
import { useGetUsersQuery } from "@/redux/features/user/user.api";
import { useSearchParams } from "react-router";
import Users from "../Users";
import type { IMeta } from "@/types";

const Riders = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const riderStatus = searchParams.get("riderStatus") || undefined;

  const { data, isLoading } = useGetUsersQuery({
    role: "rider",
    search,
    isBlocked: riderStatus === "blocked" ? true : riderStatus === 'unblocked' ? false : undefined,
  });


  return (
    <section className="section w-full">
      <Heading heading="Riders" />

      <Users users={data?.data || []} meta={data?.meta as IMeta} isLoading={isLoading} role="rider" />
    </section>
  );
};

export default Riders;
