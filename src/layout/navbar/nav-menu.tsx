import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navlinks } from "@/constant/navlinks";
import { cn } from "@/lib/utils";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start px-4">
      {navlinks.map((link) => (
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
