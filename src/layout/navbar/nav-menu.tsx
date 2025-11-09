import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import AvailableRequest from "@/pages/Available-Request/AvailableRequest";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { useGetActiveStatusQuery } from "@/redux/features/driver/driver.api";
import { navlinks } from "@/routes/navlinks";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router";

export const NavMenu = (props: NavigationMenuProps) =>{
  const { data } = useGetActiveStatusQuery(undefined);
  const { data: user } = useGetMeQuery(undefined);

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {!data || user?.role !== 'driver'
          ? navlinks.map((link) => (
              <NavigationMenuItem key={link.path} className="w-full md:w-fit">
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "aria-[current=page]:bg-primary w-full"
                  )}
                >
                  <NavLink to={link.path} end={link.path === "/"}>
                    {link.label}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          : [...navlinks.slice(0, -1), {
              path: "/available-request",
              label: "Available Request",
              Component: AvailableRequest,
            }].map((link) => (
              <NavigationMenuItem key={link.path} className="w-full md:w-fit">
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "aria-[current=page]:bg-primary w-full"
                  )}
                >
                  <NavLink to={link.path} end={link.path === "/"}>
                    {link.label}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
