import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../components/Context/Context";

const RequireAuth = ({path}) => {
  const { profile } = useProfile();
  const location = useLocation();
  return profile?.access?.includes(path) ? (
    <Outlet />
  ) : profile?.user? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
