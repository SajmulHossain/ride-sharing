import * as React from "react";

import Logo from "@/assets/logo/Logo";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuSkeleton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { getNavs } from "@/utils/getNavs";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: user, isLoading, isError } = useGetMeQuery(undefined);
  const data = {
    user: {
      name: user?.name,
      email: user?.email,
    },
    navMain: getNavs(user?.role),
  };

  if (!isLoading && isError) {
    return <></>;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo hide />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {isLoading && !isError ? (
          <SidebarMenuSkeleton></SidebarMenuSkeleton>
        ) : (
          <NavUser user={data.user} />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
