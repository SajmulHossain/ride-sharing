import type { ComponentType } from "react";

interface SideBarItems {
  title: string;
  url: string;
  Component?: ComponentType;
}

export interface SidebarRouteType {
  title: string;
  url: string;
  icon?: ComponentType;
  isActive: boolean;
  items: SideBarItems[];
}
