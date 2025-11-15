import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useSearchParams } from "react-router";

const UserFilter = ({ role }: { role: string }) => {
  const [riderStatus, setRiderStatus] = useState("");
  const [driverApprovalStatus, setDriverApprovalStatus] = useState("");
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const driverApprovalStatusValue =
    searchParams.get("driverApprovalStatus") || "";
  const searchValue = searchParams.get("search") || "";
  const riderStatusValue = searchParams.get("riderStatus") || "";

  const handleClearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    params.delete("driverApprovalStatus");
    params.delete("riderStatus");
    setSearchParams(params);
  };

  //   const handleStatusFilter = (value: string) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set("driverApprovalStatus", value);
  //     setSearchParams(params);
  //   };

  //   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set("search", e.target.value);
  //     setSearchParams(params);
  //   };

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams);

    params.set("search", search);
    if (role === "rider") {
      params.set("riderStatus", riderStatus);
    }
    if (role === "driver") {
      params.set("driverApprovalStatus", driverApprovalStatus);
    }

    setSearchParams(params);
  };

  return (
    <div className="flex gap-2 md:gap-4 flex-wrap sm:flex-nowrap">
      <Input
        placeholder="Search"
        defaultValue={searchValue}
        onChange={(e) => setSearch(e.target.value)}
        name="search"
        className="w-full"
      />
      {role === "driver" ? (
        <>
          <Select
            onValueChange={(value) => setDriverApprovalStatus(value)}
            defaultValue={driverApprovalStatusValue}
            name="driverApprovalStatus"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="approve">Approved</SelectItem>
              <SelectItem value="suspend">Suspended</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </>
      ) : (
        <Select
          defaultValue={riderStatusValue}
          onValueChange={(value) => setRiderStatus(value)}
          name="riderStatus"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blocked">Blocked</SelectItem>
            <SelectItem value="unblocked">Unblocked</SelectItem>
          </SelectContent>
        </Select>
      )}

      <Button onClick={handleSubmit}>Done</Button>
      <Button variant={"outline"} onClick={handleClearFilter}>
        Clear
      </Button>
    </div>
  );
};

export default UserFilter;
