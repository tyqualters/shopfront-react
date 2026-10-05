import type { RouteObject } from "react-router";

import TenantLayout from "./layouts/tenant-layout";
import TenantHome from "./routes/tenant-home";
import Products from "./routes/products";
import Orders from "./routes/orders";
import Customers from "./routes/customers";

export const tenantRoutes: RouteObject[] = [
  {
    Component: TenantLayout,
    children: [
      {
        index: true,
        Component: TenantHome,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "orders",
        Component: Orders,
      },
      {
        path: "customers",
        Component: Customers,
      },
    ],
  },
];
