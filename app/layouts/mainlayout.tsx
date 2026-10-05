import { Outlet } from "react-router";
import { tenantMiddleware } from "../middleware/tenant";

export const middleware = [tenantMiddleware];

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
