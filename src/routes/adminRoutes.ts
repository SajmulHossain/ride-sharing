import Drivers from "@/pages/Dashboard/Admin/User/Driver/Drivers";
import Riders from "@/pages/Dashboard/Admin/User/Rider/Riders";
import type { SidebarRouteType } from "@/types";
import { withAuth } from "@/utils/withAuth";
import { CalculatorIcon, CarIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";
import AdminAnalytics from "@/pages/Dashboard/Admin/User/AdminAnalytics";

export const adminRoutes: SidebarRouteType[] = [
  {
    title: "Analytics",
    url: "#",
    icon: CalculatorIcon,
    isActive: true,
    items: [
      {
        title: "Analytics",
        url: "",
        Component: withAuth(AdminAnalytics),
      },
    ],
  },
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
