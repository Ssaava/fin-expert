// components/check-auth.tsx
import { Navigate, Outlet, useLocation } from "react-router";

interface CheckAuthProps {
  isAuthenticated: boolean;
  redirectTo: string;
  requiredRole?: string | string[];
  userRole?: string;
  children?: React.ReactNode;
}

const CheckAuth = ({
  isAuthenticated,
  redirectTo,
  requiredRole,
  userRole,
  children,
}: CheckAuthProps) => {
  const location = useLocation();

  // If route requires authentication but user isn't authenticated
  if (requiredRole !== undefined && !isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // If route requires a specific role but user doesn't have it
  if (requiredRole && userRole) {
    const hasRequiredRole = Array.isArray(requiredRole)
      ? requiredRole.includes(userRole)
      : requiredRole === userRole;

    if (!hasRequiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // If route is for auth pages but user is already authenticated
  if (requiredRole === undefined && isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default CheckAuth;
