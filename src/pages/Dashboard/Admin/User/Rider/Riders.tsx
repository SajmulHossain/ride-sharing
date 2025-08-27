import Heading from "@/components/Heading";
import { useGetUsersQuery } from "@/redux/features/user/user.api";
import { useSearchParams } from "react-router";
import Users from "../Users";

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

      <Users users={data!} isLoading={isLoading} role="rider" />
    </section>
  );
};

export default Riders;
