import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

const TableRowSkeleton = ({colspan, length=5}: { colspan: number; length?: number }) => {
  return Array.from({ length: length }).map((_,i) => (
    <TableRow key={i}>
      <TableCell colSpan={colspan}>
        <Skeleton className="h-8 w-full" />
      </TableCell>
    </TableRow>
  ))
};

export default TableRowSkeleton;