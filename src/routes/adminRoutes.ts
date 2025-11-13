import AdminAnalytics from "@/pages/Dashboard/Admin/User/AdminAnalytics";
import Drivers from "@/pages/Dashboard/Admin/User/Driver/Drivers";
import Riders from "@/pages/Dashboard/Admin/User/Rider/Riders";
import type { SidebarRouteType } from "@/types";
import { withAuth } from "@/utils/withAuth";
import { CalculatorIcon, CarIcon, UserIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";
import AdminRides from "@/pages/Dashboard/Admin/Rides/AdminRides";

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
    icon: UserIcon,
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
  {
    title: "Ride Management",
    url: "#",
    icon: CarIcon,
    isActive: true,
    items: [
      {
        title: "All Rides",
        url: "all-rides",
        Component: withAuth(AdminRides),
      },
    ],
  },
  ...riderRoutes,
];
