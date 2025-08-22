import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navlinks } from "@/constant/navlinks";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navlinks.map((link) => (
          <NavigationMenuItem key={link.path}>
            <NavigationMenuLink asChild>
              <Link to={link.path}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
    </NavigationMenuList>
  </NavigationMenu>
);
