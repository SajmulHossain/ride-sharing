import Drivers from "@/pages/Dashboard/Admin/User/Driver/Drivers";
import Riders from "@/pages/Dashboard/Admin/User/Rider/Riders";
import type { SidebarRouteType } from "@/types";
import { withAuth } from "@/utils/withAuth";
import { CarIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";

export const adminRoutes: SidebarRouteType[] = [
  {
    title: "User Management",
    url: "#",
    icon: CarIcon,
    isActive: true,
    items: [
      {
        title: "Drivers",
        url: "drivers",
        Component: withAuth(Drivers),
      },
      {
        title: "Riders",
        url: "riders",
        Component: withAuth(Riders),
      },
    ],
  },
  ...riderRoutes,
];
