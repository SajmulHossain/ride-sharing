import Profile from "@/pages/profile-page/Profile";
import type { SidebarRouteType } from "@/types";
import { CreativeCommonsIcon } from "lucide-react";

export const commonRoutes: SidebarRouteType[] = [
  {
    title: "",
    url: "#",
    icon: CreativeCommonsIcon,
    isActive: true,
    items: [
      {
        title: "Profile",
        url: "profile",
        Component: Profile,
      },
    ],
  }
];
