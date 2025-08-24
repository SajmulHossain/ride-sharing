import type { IUser } from "@/types";
import Logo from "@/assets/logo/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import Logout from "@/components/Logout";

export const NavigationSheet = ({
  user,
  isLoading,
}: {
  user: IUser | undefined;
  isLoading: boolean;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-0">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-0" />
        <div className="px-4">
          <NavMenu orientation="vertical" className="flex-none" />
          {isLoading ? (
            <Skeleton className="w-full h-8"></Skeleton>
          ) : !user?.email ? (
            <Button
              asChild
              variant="outline"
              className="inline-flex sm:hidden rounded-sm w-full mt-4"
            >
              <Link to="/login">Login</Link>
            </Button>
          ) : (
            <>
              <Separator className="my-4" />
              <Logout className="md:hidden w-full" />
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
