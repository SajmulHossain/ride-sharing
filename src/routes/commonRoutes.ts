import ChangePassword from "@/pages/ChangePassword/ChangePassword";
import Profile from "@/pages/profile-page/Profile";
import type { SidebarRouteType } from "@/types";
import { LockKeyholeIcon } from "lucide-react";

export const commonRoutes: SidebarRouteType[] = [
  {
    title: "Privacy and Security",
    url: "#",
    icon: LockKeyholeIcon,
    isActive: true,
    items: [
      {
        title: "Profile",
        url: "profile",
        Component: Profile,
      },
      {
        title: "Change Password",
        url: "change-password",
        Component: ChangePassword
      }
    ],
  }
];
