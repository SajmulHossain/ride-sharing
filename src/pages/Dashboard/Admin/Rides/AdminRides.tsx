import Heading from "@/components/common/Heading";
import Pagination from "@/components/Pagination";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllRidesQuery } from "@/redux/features/ride/ride.api";
import type { IMeta } from "@/types";
import { useSearchParams } from "react-router";
import RidesFilter from "./RidesFilter";
import RideTableRow from "./RideTableRow";
import TableRowSkeleton from "@/components/common/TableRowSkeleton";

const AdminRides = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "";
  const search = searchParams.get("search") || "";

  const page = searchParams.get("page") || "1";
  const { data, isLoading } = useGetAllRidesQuery({
    status,
    search,
    page,
  });
  const { meta, rides } = data || {};

  return (
    <section className="section">
      <Heading heading="All Rides" description="All rides here..." />

      <RidesFilter />

      <div className="mt-6">
        <Table>
          <TableCaption>A list of recent ride activities.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">From</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Rider</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Requested</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? <TableRowSkeleton colspan={8} /> : rides?.length ? (
              rides?.map((ride) => <RideTableRow key={ride?._id} ride={ride} />)
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-red-700 text-lg font-semibold text-center h-40"
                >
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination meta={meta as IMeta} />
      </div>
    </section>
  );
};

export default AdminRides;
