import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rideStatus } from "@/constant/rideStatus";
import { useSearchParams } from "react-router";

const RidesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "";
  const searchValue = searchParams.get("search") || "";

  const handleClearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    params.delete("status");
    setSearchParams(params);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      search: { value: string };
      status: { value: string };
    };

    const search = form?.search?.value || "";
    const status = form?.status?.value || "";

    const params = new URLSearchParams(searchParams);
    params.set("status", status);
    params.set("search", search);

    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <Input
          placeholder="Search"
          defaultValue={searchValue}
          name="search"
        />
        <Select
          defaultValue={status}
          name="status"
        >
          <SelectTrigger value="" className="w-[180px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(rideStatus).map((status) => (
              <SelectItem value={status} key={status} className="capitalize">{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button type="submit">Done</Button>
        <Button type="button" variant={"outline"} onClick={handleClearFilter}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default RidesFilter;
