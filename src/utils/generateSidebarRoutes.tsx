import { getNavs } from "./getNavs";

export const generateDashboardRoutes = (role: string | undefined) => {
  const navs = getNavs(role);

  return navs.flatMap((nav) =>
    nav.items.map((item) => ({
      path: item.url,
      Component: item.Component,
    }))
  );
};
