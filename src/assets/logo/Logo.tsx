import { Link } from "react-router";
import logo from "./logo.svg";

const Logo = () => (
  <Link to="/">
    <img src={logo} className="size-10" alt="logo" />
  </Link>
);

export default Logo;
