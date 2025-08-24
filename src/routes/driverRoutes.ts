import type { SidebarRouteType } from "@/types";
import { BedIcon, HistoryIcon } from "lucide-react";

export const driverRoutes: SidebarRouteType[] = [
  {
    title: "Service Driver",
    url: "#",
    icon: BedIcon,
    isActive: true,
    items: [
      {
        title: "History",
        url: "/history",
        Component: HistoryIcon,
      },
    ],
  },
];
