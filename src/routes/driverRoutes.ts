import type { SidebarRouteType } from "@/types";
import { BedIcon, HistoryIcon } from "lucide-react";
import { riderRoutes } from "./riderRoutes";

export const driverRoutes: SidebarRouteType[] = [
  {
    title: "Service Driver",
    url: "#",
    icon: BedIcon,
    isActive: true,
    items: [
      {
        title: "History",
        url: "history",
        Component: HistoryIcon,
      },
    ],
  },
  ...riderRoutes,
];
