import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import type { ComponentType } from "react";
import { Navigate, useLocation } from "react-router";

export const withAuth = (Component: ComponentType) => {
  return function AuthWrapper() {
    const { data: user, isLoading } = useGetMeQuery(undefined);
    const { pathname } = useLocation();

    if (!isLoading && !user?.email) {
      return <Navigate to="/login" state={pathname} replace={true} />;
    }

    return <Component />;
  };
};
