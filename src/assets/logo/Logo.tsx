import { Link } from "react-router";
import logo from "./logo.svg";
import { cn } from "@/lib/utils";

const Logo = ({ hide = false }: { hide?: boolean }) => (
  <Link className="lg:flex lg:gap-2 lg:items-center" to="/">
    <img src={logo} className="size-10" alt="logo" />
    <span className={cn("hidden", hide ? "hidden" : "lg:block")}>Go Together</span>
  </Link>
);

export default Logo;
