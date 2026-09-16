import React from "react";
import { Link } from "react-router";
import NavBar from "./navbar.tsx";
import { AuthWrapper } from "./authwrap.tsx";

const Logout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const res = await fetch("/api/logout");
  if (!res.ok) console.error(res.status);
  if (typeof window !== "undefined") {
    window.location.reload();
  }
};

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex flex-wrap items-center justify-between py-3 mb-4 border-b border-base-300">
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex text-base-content hover:opacity-80"
          >
            <img
              className="w-10 h-10"
              src="/assets/Figma_Logo.png"
              alt="Logo"
            />
          </a>
        </div>

        <NavBar />

        <div className="flex items-center justify-end gap-2">
          <AuthWrapper
            fallback={
              <>
                <Link to="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign-up
                </Link>
              </>
            }
          >
            <Link to="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
            <Link to="/" onClick={Logout} className="btn btn-outline btn-error">
              Sign out
            </Link>
          </AuthWrapper>
        </div>
      </header>
    </div>
  );
};

export default Header;
