import Heading from "@/components/Heading";
import Users from "../Users";
import { useSearchParams } from "react-router";
import { useGetDriversQuery } from "@/redux/features/user/user.api";

const Riders = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const riderStatus = searchParams.get("riderStatus") || "";

  const { data, isLoading } = useGetDriversQuery({
    role: "rider",
    search,
    isBlocked: riderStatus === "blocked" ? true : false,
  });

  return (
    <section className="section w-full">
      <Heading heading="Riders" />

      <Users users={data!} isLoading={isLoading} role="rider" />
    </section>
  );
};

export default Riders;
