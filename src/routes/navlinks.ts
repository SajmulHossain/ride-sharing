import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/FAQ/Faq";
import Features from "@/pages/Feature/Features";
import Home from "@/pages/Home/Home";
import RequestRide from "@/pages/RequestRide/RequestRide";
import type { INavLinks } from "@/types";
import { withAuth } from "@/utils/withAuth";

export const navlinks: INavLinks[] = [
  {
    path: "/",
    label: "Home",
    Component: Home,
  },
  {
    path: "/about",
    label: "About Us",
    Component: About,
  },
  {
    path: "/features",
    label: "Feature",
    Component: Features,
  },
  {
    path: "/contact",
    label: "Contact",
    Component: Contact,
  },
  {
    path: "/faq",
    label: "FAQ",
    Component: Faq,
  },
  {
    path: "/request-ride",
    label: "Request Ride",
    Component: withAuth(RequestRide),
  },
];