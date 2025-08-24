import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import Disabled from "@/pages/Disabled";
import { navlinks } from "@/routes/navlinks";
import { generateDashboardRoutes } from "@/utils/generateSidebarRoutes";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: navlinks,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: generateDashboardRoutes(),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/disabled",
    Component: Disabled,
  },
]);
