import Logo from "@/assets/logo/Logo";
import { DarkModeToggler } from "@/components/DarkModeToggler";
import Logout from "@/components/Logout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetMeQuery
} from "@/redux/features/auth/auth.api";
import { Link } from "react-router";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ActiveToggler from "@/components/DriverActiveToggler";

const Navbar = () => {
  const { data: user, isLoading } = useGetMeQuery(undefined);

  return (
    <header className="sticky top-0 inset-x-4 bg-background border dark:border-slate-700/70 z-50">
      <nav className="section py-3">
        <div className="h-full flex items-center justify-between mx-auto">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden lg:block" />

          <div className="flex items-center gap-3">
            <DarkModeToggler />
            {isLoading ? (
              <Skeleton className="h-8 w-20"></Skeleton>
            ) : !user?.email ? (
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
              <ActiveToggler />
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
                <Logout className="hidden md:block" />
              </>
            )}
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <NavigationSheet user={user} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
