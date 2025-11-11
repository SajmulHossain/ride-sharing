import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import AvailableRequest from "@/pages/Available-Request/AvailableRequest";
import Disabled from "@/pages/Disabled";
import NotFound from "@/pages/NotFound";
import Ride from "@/pages/Ride/Ride";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { navlinks } from "@/routes/navlinks";
import { generateDashboardRoutes } from "@/utils/generateSidebarRoutes";
import { withAuth } from "@/utils/withAuth";
import { useRoutes } from "react-router";

// const {role, isLoading} = store.getState().auth;
// console.log(role);
// console.log(generateDashboardRoutes(role));

const RouterWrapper = () => {
  const { data, isLoading } = useGetMeQuery(undefined);
  const role = data?.role;

  const router = [
    {
      path: "/",
      Component: App,
      children: [
        ...navlinks,
        {
          path: "/available-request",
          label: "Available Request",
          Component: withAuth(AvailableRequest),
        },
        {
          path: "/ride",
          Component: withAuth(Ride),
        },
      ],
    },
    {
      path: "/dashboard",
      Component: withAuth(DashboardLayout),
      children: !isLoading ? generateDashboardRoutes(role) : [],
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
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return useRoutes(router);
};

export default RouterWrapper;
