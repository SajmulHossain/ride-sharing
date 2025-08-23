import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Logo from "@/assets/logo/Logo";
import { DarkModeToggler } from "@/components/DarkModeToggler";
import { Link } from "react-router";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";

const Navbar = () => {
  const { data: user } = useGetMeQuery(undefined);

  return (
    <header className="sticky top-0 inset-x-4 bg-background border dark:border-slate-700/70 z-50">
      <nav className="section py-3">
        <div className="h-full flex items-center justify-between mx-auto">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <DarkModeToggler />
            {user?.email ? (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hidden sm:inline-flex rounded-full"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="rounded-full">
                  <Link to="/register">Register</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline">Logout</Button>
              </>
            )}
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
