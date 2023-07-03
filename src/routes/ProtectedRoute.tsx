import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRoute {
  access: boolean;
  to: string;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ access, to }) => {
  if (!access) {
    return <Navigate replace to={to} />;
  }
  return <Outlet />;
};
