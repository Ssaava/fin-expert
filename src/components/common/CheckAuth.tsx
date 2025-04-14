import { Navigate, Outlet, useLocation } from "react-router";

interface CheckAuthProps {
  isAuthenticated: boolean;
  redirectTo: string;
  requiredRole?: string | string[];
  restrictedRole?: string | string[]; // New prop for restricted roles
  userRole?: string | null;
  children?: React.ReactNode;
  allowUnauthenticated?: boolean;
}

export const CheckAuth = ({
  isAuthenticated,
  redirectTo,
  requiredRole,
  restrictedRole, // New prop
  userRole,
  children,
  allowUnauthenticated = false,
}: CheckAuthProps) => {
  const location = useLocation();

  // Handle routes that explicitly allow unauthenticated access
  if (allowUnauthenticated && isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Handle protected routes
  if (!allowUnauthenticated) {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    // Check if user has restricted role fintech-users
    if (restrictedRole && userRole) {
      const hasRestrictedRole = Array.isArray(restrictedRole)
        ? restrictedRole.includes(userRole)
        : restrictedRole === userRole;

      if (hasRestrictedRole) {
        return <Navigate to="/dashboard/survey-insights" replace />;
      }
    }

    // Check role requirements if specified
    if (requiredRole && userRole) {
      const hasRequiredRole = Array.isArray(requiredRole)
        ? requiredRole.includes(userRole)
        : requiredRole === userRole;

      if (!hasRequiredRole) {
        return <Navigate to="/unauthorized" replace />;
      }
    }
  }

  return children ? children : <Outlet />;
};
