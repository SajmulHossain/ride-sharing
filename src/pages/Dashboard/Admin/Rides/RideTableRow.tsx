import { TableCell, TableRow } from "@/components/ui/table";
import { rideStatus } from "@/constant/rideStatus";
import { cn } from "@/lib/utils";
import type { IRide } from "@/types";
import { format } from "date-fns";

const RideTableRow = ({ride} : {ride: IRide}) => {
    const { createdAt, updatedAt, destination, driver, rider, status, pickup, amount } = ride || {};

    const currentStatus = status.map(s => s.state)[status.length - 1];

  return (
    <TableRow>
      <TableCell title={pickup?.place_name} className="font-medium">
        {pickup?.place_name.substring(0, 20)}...
      </TableCell>
      <TableCell>{destination?.place_name.substring(0, 20)}...</TableCell>
      <TableCell>{rider}</TableCell>
      <TableCell>{driver}</TableCell>
      <TableCell
        className={cn("capitalize", {
          "text-red-700": currentStatus === rideStatus.cancelled,
          "text-primary": currentStatus === rideStatus.completed,
        })}
      >
        {currentStatus}
      </TableCell>
      <TableCell>{format(new Date(createdAt || new Date()), "dd MMM yyy")}</TableCell>
      <TableCell>{format(new Date(updatedAt || new Date()), "dd MMM yyy")}</TableCell>
      <TableCell className="text-right">${amount}</TableCell>
    </TableRow>
  );
};

export default RideTableRow;