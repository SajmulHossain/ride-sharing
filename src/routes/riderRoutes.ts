import History from "@/pages/Dashboard/History/History";
import Rides from "@/pages/Dashboard/Ride/Rides";
import type { SidebarRouteType } from "@/types";
import { BedIcon } from "lucide-react";

export const riderRoutes: SidebarRouteType[] = [
  {
    title: "Service",
    url: "#",
    icon: BedIcon,
    isActive: true,
    items: [
      {
        title: "History",
        url: "history",
        Component: History,
      },
      {
        title: "Rides",
        url: "rides",
        Component: Rides,
      },
    ],
  },
];
