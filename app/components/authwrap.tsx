import React, { useState, useEffect, type ReactNode } from "react";
import Cookies from "js-cookie";

interface AuthWrapperProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional element to show if unauthenticated
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  fallback = null,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authId = Cookies.get("authid");

    if (authId && authId !== "-1") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return null; // Or return a loading spinner component
  }

  return isAuthenticated ? <>{children}</> : <>{fallback}</>;
};
