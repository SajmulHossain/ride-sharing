import { userRole } from "@/constant/userRole";
import { adminRoutes } from "@/routes/adminRoutes";
import { driverRoutes } from "@/routes/driverRoutes";
import { riderRoutes } from "@/routes/riderRoutes";

export const getNavs = (role: string | undefined) => {
    // const states = store.getState();
    // const role = states.auth.role;

    // if (!states.auth.role) {
    //   return [];
    // }

    // let navs: SidebarRouteType[] | [];
    switch (role) {
      case userRole.rider:
        return riderRoutes;
      case userRole.driver:
        return driverRoutes;
      case userRole.admin:
        return adminRoutes;
      default:
        return [];
    }
}