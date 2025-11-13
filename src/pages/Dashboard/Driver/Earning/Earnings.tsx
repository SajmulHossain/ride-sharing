import Heading from "@/components/common/Heading";
import NoData from "@/components/common/NoData";
import { useGetDriverEarningQuery } from "@/redux/features/driver/driver.api";
import Earn from "./Earn";
import { Separator } from "@/components/ui/separator";

const Earnings = () => {
  const { data: earnings } = useGetDriverEarningQuery(undefined);

  return (
    <section className="section">
      <Heading heading="Earnings" description="Your total earnings" />

      <p className="font-bold text-xl">
        Your total income: {earnings?.totalIncome || 0}{" "}
        <span className="text-sm font-light">(Taka only)</span>
      </p>
      <Separator className="my-4" />

      {earnings?.history?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {earnings.history?.map((earn, index) => (
            <Earn key={index} earn={earn} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default Earnings;
