import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rideStatus } from "@/constant/rideStatus";
import { useState } from "react";
import { useSearchParams } from "react-router";

const RidesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearch] = useState("");
  const [statusTerm, setStatus] = useState("");

  const status = searchParams.get("status") || "";
  const search = searchParams.get("search") || "";

  const handleClearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    params.delete("status");
    setSearchParams(params);
  };

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams);
    params.set("status", statusTerm);
    params.set("search", searchTerm);

    setSearchParams(params);
  };
  
  return (
    <div className="flex gap-4">
      <Input
        placeholder="Search"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select onValueChange={(value) => setStatus(value)} defaultValue={status} name="status">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            {Object.values(rideStatus).map(
              (status) =>
                (status === rideStatus.completed ||
                  status === rideStatus.cancelled) && (
                  <SelectItem
                    value={status}
                    key={status}
                    className="capitalize"
                  >
                    {status}
                  </SelectItem>
                )
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={handleSubmit}>Done</Button>
      <Button variant={"outline"} onClick={handleClearFilter}>
        Clear
      </Button>
    </div>
  );
};

export default RidesFilter;
