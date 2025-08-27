import { Skeleton } from "@/components/ui/skeleton";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useLocation } from "react-router";

const NotFound = () => {
  const { pathname } = useLocation();
  const { isLoading } = useGetMeQuery(undefined);
  if (isLoading && pathname.includes("dashboard")) {
    return (
      <section className="min-h-screen flex gap-4 py-12 px-4">
        <div className="hidden md:block md:w-[200px] lg:w-[300px] space-y-3">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Skeleton className="aspect-video rounded-xl" />
            <Skeleton className="aspect-video rounded-xl" />
            <Skeleton className="aspect-video rounded-xl" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </section>
    );
  }
  return <section>Notfound</section>;
};

export default NotFound;
