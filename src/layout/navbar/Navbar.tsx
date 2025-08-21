import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Logo from "@/assets/logo/Logo";
import { DarkModeToggler } from "@/components/DarkModeToggler";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
         <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <DarkModeToggler />
            <Button
            asChild
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="rounded-full">Register</Button>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
