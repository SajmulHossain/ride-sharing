import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useLocation, useNavigate } from "react-router";
import DashboardSkeleton from "./Dashboard/DashboardSkeleton";
import errorImg from '@/assets/images/error.png';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoading } = useGetMeQuery(undefined);
  if (isLoading && pathname.includes("dashboard")) {
    return (
      <DashboardSkeleton />
    );
  }

  return (
    <section className="section grid place-items-center min-h-screen">
      <div>
        <img className="rounded-xl w-full object-cover" src={errorImg} />

        <div className="mt-6 flex justify-center gap-2">
          <Button onClick={() => navigate("/")} className="w-1/3" variant={"destructive"}>Go Home</Button>
          <Button onClick={() => navigate(-1)} className="w-1/3" variant={"secondary"}>Go Back</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
