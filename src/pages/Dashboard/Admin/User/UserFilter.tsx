import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

const UserFilter = ({ role }: { role: string }) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      search: { value: string };
      driverApprovalStatus: { value: string };
      riderStatus: { value: string };
    };
    const search = form.search.value || "";
    const driverApprovalStatus = form.driverApprovalStatus?.value || "";
    const riderStatus = form.riderStatus?.value || "";

    const params = new URLSearchParams(searchParams);
    
    params.set("search", search);
    if(role === 'rider') {
      params.set("riderStatus", riderStatus);
    }
    if(role === 'driver') {
      params.set("driverApprovalStatus", driverApprovalStatus);
    }

    setSearchParams(params);
  };

  return (
      <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
        <Input
          placeholder="Search"
          defaultValue={searchValue}
          //   onChange={handleSearch}
          name="search"
        />
        {role === "driver" ? (
          <>
            <Select
              defaultValue={driverApprovalStatusValue}
              //   onValueChange={handleStatusFilter}
              name="driverApprovalStatus"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="approve">Approve</SelectItem>
                <SelectItem value="suspend">Suspend</SelectItem>
              </SelectContent>
            </Select>
          </>
        ): <Select
              defaultValue={riderStatusValue}
              name="riderStatus"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="unblocked">Unblock</SelectItem>
              </SelectContent>
            </Select>}

        <Button type="submit">Done</Button>
      <Button type="button" variant={"outline"} onClick={handleClearFilter}>
        Clear
      </Button>
    </div>
      </form>
  );
};

export default UserFilter;
