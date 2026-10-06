import type { RouteObject } from "react-router";

import TenantLayout from "./layouts/layout.tenant";
import TenantHome from "./routes/tenant/home.tenant";

export const tenantRoutes: RouteObject[] = [
  {
    Component: TenantLayout,
    children: [
      {
        index: true,
        Component: TenantHome,
      },
    ],
  },
];
