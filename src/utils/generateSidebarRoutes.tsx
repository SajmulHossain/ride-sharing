import { getNavs } from "./getNavs";

export const generateDashboardRoutes = () => {
  const navs = getNavs();

  return navs.flatMap((nav) =>
    nav.items.map((item) => ({
      path: item.url,
      Component: item.Component,
    }))
  );
};
