import type { RouteObject } from "react-router";

import TenantLayout from "./layouts/tenantlayout";
import TenantHome from "./routes/shophome";

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
