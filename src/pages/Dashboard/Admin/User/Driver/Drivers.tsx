import Heading from "@/components/Heading";
import { DataTableDemo } from "./DataTable";
import { useGetDriversQuery } from "@/redux/features/user/user.api";
import { Skeleton } from "@/components/ui/skeleton";

const Drivers = () => {
  const { data: drivers = [...Array(5)], isLoading } = useGetDriversQuery({
    role: "driver",
    driverApprovalStatus: "approve",
  });
  console.log(drivers);

  return (
    <section className="section w-full">
      <Heading heading="Drivers" />
      {isLoading ? (
        <div className="space-y-2 w-full">
          {drivers.map(() => (
            <Skeleton className="w-full h-10"></Skeleton>
          ))}
        </div>
      ) : (
        <DataTableDemo data={drivers} />
      )}
    </section>
  );
};

export default Drivers;
