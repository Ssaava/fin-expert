import { Navigate, Outlet, useLocation } from "react-router";

interface CheckAuthProps {
  isAuthenticated: boolean;
  redirectTo: string;
  requiredRole?: string | string[];
  userRole?: string | null;
  children?: React.ReactNode;
  allowUnauthenticated?: boolean; // New prop for routes that don't require auth
}

const CheckAuth = ({
  isAuthenticated,
  redirectTo,
  requiredRole,
  userRole,
  children,
  allowUnauthenticated = false, // Default to false for protected routes
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

export default CheckAuth;
