import type { SidebarRouteType } from "@/types";
import { BedIcon, HistoryIcon } from "lucide-react";

export const riderRoutes: SidebarRouteType[] = [
  {
    title: "Service",
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
