import DriverHistory from "@/pages/Dashboard/Driver/History/DriverHistory";
import type { SidebarRouteType } from "@/types";
import { CarIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";
import Earning from "@/pages/Dashboard/Driver/Earning/Earnings";
import { withAuth } from "@/utils/withAuth";
import DriverAnalytics from "@/pages/Dashboard/Driver/Analytics/DriverAnalytics";

export const driverRoutes: SidebarRouteType[] = [
  {
    title: "Driver",
    url: "#",
    icon: CarIcon,
    isActive: true,
    items: [
      { title: "Analytics", url: "", Component: DriverAnalytics },
      {
        title: "Drive History",
        url: "drive-history",
        Component: withAuth(DriverHistory),
      },
      {
        title: "Earnings",
        url: "earnings",
        Component: withAuth(Earning),
      },
      {
        title: "Update Vehicle Information",
        url: "profile",
      },
    ],
  },
  ...riderRoutes,
];
