import Logo from "@/assets/logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { navlinks } from "@/routes/navlinks";

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="section">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10">
          <div>
            <Logo />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {navlinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          {/* <div className="max-w-xs w-full">
            <h6 className="font-semibold">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </form>
          </div> */}
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link to="/" target="_blank">
              Go Together
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
