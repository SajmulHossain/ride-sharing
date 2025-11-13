import { TableCell, TableRow } from "@/components/ui/table";
import type { IRide } from "@/types";

const RideTableRow = ({ride} : {ride: IRide}) => {
    const { createdAt, updatedAt, destination, driver, rider, status, pickup } = ride || {};

    const currentStatus = status.map(s => s.state)[0];

  return (
    <TableRow>
      <TableCell title={pickup?.place_name} className="font-medium">{pickup?.place_name.substring(0,20)}...</TableCell>
      <TableCell>{destination?.place_name.substring(0,20)}...</TableCell>
      <TableCell>{currentStatus}</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  );
};

export default RideTableRow;