import DriverHistory from "@/pages/Dashboard/Driver/History/DriverHistory";
import type { SidebarRouteType } from "@/types";
import { CarIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";

export const driverRoutes: SidebarRouteType[] = [
  {
    title: "Driver Driver",
    url: "#",
    icon: CarIcon,
    isActive: true,
    items: [
      {
        title: "Drive History",
        url: "drive-history",
        Component: DriverHistory,
      },
    ],
  },
  ...riderRoutes,
];
