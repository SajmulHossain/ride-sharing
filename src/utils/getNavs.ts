import { userRole } from "@/constant/userRole";
import { store } from "@/redux/store";
import { adminRoutes } from "@/routes/adminRoutes";
import { driverRoutes } from "@/routes/driverRoutes";
import { riderRoutes } from "@/routes/riderRoutes";
import type { SidebarRouteType } from "@/types";

export const getNavs = () => {
    const states = store.getState();
    const role = states.auth.role;

    if (!states.auth.role) {
      return [];
    }

    let navs: SidebarRouteType[] | [] = [];
    switch (role) {
      case userRole.rider:
        navs = riderRoutes;
        break;
      case userRole.driver:
        navs = driverRoutes;
        break;
      case userRole.admin:
        navs = adminRoutes;
        break;
      default:
        navs = [];
        break;
    }

    return navs;
}