import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};

export default function ProtectedRoutes({}: Props) {
  const location = useLocation();

  console.log(location);

  let isAuth : boolean = false;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
