import Heading from "@/components/Heading";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetDriversQuery } from "@/redux/features/user/user.api";
import UserFilter from "../UserFilter";
import UserTable from "../UserTable";
import { useSearchParams } from "react-router";

const Drivers = () => {
  const [searchParams] = useSearchParams();
  const driverApprovalStatus = searchParams.get("driverApprovalStatus") || "";
  const search = searchParams.get("search") || "";

  const { data: drivers = [...Array(5)], isLoading } = useGetDriversQuery({
    role: "driver",
    driverApprovalStatus,
    search
  });


  return (
    <section className="section w-full">
      <Heading heading="Drivers" />
      <UserFilter role="driver" />

      {isLoading ? (
        <div className="space-y-2 w-full">
          {drivers.map(() => (
            <Skeleton className="w-full h-10"></Skeleton>
          ))}
        </div>
      ) : (
        <>
          <UserTable data={drivers} role="driver" />
        </>
      )}
    </section>
  );
};

export default Drivers;
