import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { adminRoutes } from "@/routes/adminRoutes";
import { driverRoutes } from "@/routes/driverRoutes";
import { riderRoutes } from "@/routes/riderRoutes";
import type { SidebarRouteType } from "@/types";

const useRoutes = () => {
    const { data: user } = useGetMeQuery(undefined);
    let navs: SidebarRouteType[] | [] = [];
    switch (user?.role) {
      case "rider":
        navs = riderRoutes;
        break;
      case "driver":
        navs = driverRoutes;
        break;
      case "admin":
        navs = adminRoutes;
        break;
      default:
        navs = [];
        break;
    }

    return navs.flatMap((nav) =>
      nav.items.map((item) => ({
        path: item.url,
        Component: item.Component,
      }))
    );
}

export default useRoutes;