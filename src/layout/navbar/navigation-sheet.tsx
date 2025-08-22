import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Logo from "@/assets/logo/Logo";
import { Separator } from "@/components/ui/separator";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-4 ml-4">
          <Logo />
        </div>
        <Separator />
        <NavMenu orientation="vertical" className="flex-none" />
      </SheetContent>
    </Sheet>
  );
};
