import Drivers from "@/pages/Dashboard/Admin/User/Drivers";
import Riders from "@/pages/Dashboard/Admin/User/Riders";
import type { SidebarRouteType } from "@/types";
import { CarIcon } from "lucide-react";

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
            Component: Drivers
          },
          {
            title: "Riders",
            url: "riders",
            Component: Riders
          }
        ],
      },
    ]