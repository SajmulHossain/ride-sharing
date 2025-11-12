import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { userRole } from "@/constant/userRole";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { Link, Navigate, Outlet, useLocation } from "react-router";
import { Fragment } from "react/jsx-runtime";

const DashboardLayout = () => {
  const { data: user, isLoading } = useGetMeQuery(undefined);
  const { pathname } = useLocation();
  const paths = pathname.split("/");

  if(user?.role === userRole.driver && user?.driverApprovalStatus === "pending") {
    return <Navigate to="/pending" replace={true} />
  }

  if(isLoading) {
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

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {paths.map(
                  (path) =>
                    path && (
                      <Fragment key={path}>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink asChild>
                            <Link
                              to={`${path === "dashboard" ? "" : path}`}
                              className="capitalize"
                            >
                              {path}
                            </Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                      </Fragment>
                    )
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">
                    {!isLoading && user?.role}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
