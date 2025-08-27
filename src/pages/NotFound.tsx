import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useLocation } from "react-router";
import DashboardSkeleton from "./Dashboard/DashboardSkeleton";

const NotFound = () => {
  const { pathname } = useLocation();
  const { isLoading } = useGetMeQuery(undefined);
  if (isLoading && pathname.includes("dashboard")) {
    return (
      <DashboardSkeleton />
    );
  }
  return <section>Notfound</section>;
};

export default NotFound;
