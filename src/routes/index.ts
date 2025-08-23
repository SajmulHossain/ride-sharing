import App from "@/App";
import { navlinks } from "@/constant/navlinks";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import Disabled from "@/pages/Disabled";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: navlinks
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/disabled",
        Component: Disabled
    }
])