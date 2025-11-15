import { Skeleton } from "../ui/skeleton";
import { TableCell, TableRow } from "../ui/table";

const TableRowSkeleton = ({ colspan, length=10 }: { colspan: number; length?: number }) => Array.from({ length: length }).map((_,i) => (
    <TableRow key={i}>
      <TableCell colSpan={colspan}>
        <Skeleton className="h-8 w-full" />
      </TableCell>
    </TableRow>
  ))

export default TableRowSkeleton;