import type { RouteObject } from "react-router";

import DefaultLayout from "./layouts/layout.default";
import DashboardLayout, { shopLayoutLoader } from "./layouts/layout.dashboard";

import Home from "./routes/default/home.default";
import Register from "./routes/register";
import RegisterShop from "./routes/default/new-shop.default";
import RegisterProduct from "./routes/default/new-product.default";
import Login from "./routes/login";
import ShopSelect from "./routes/default/select-shop.default";
import ShopView from "./routes/blank";

import DashboardRedirect from "./routes/default/dashboard/redirect.dashboard";
import DashboardOverview from "./routes/default/dashboard/overview.dashboard";

export const defaultRoutes: RouteObject[] = [
  {
    Component: DefaultLayout,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "register",
        Component: Register,
      },

      {
        path: "register-shop",
        Component: RegisterShop,
      },

      {
        path: "register-product",
        Component: RegisterProduct,
      },

      {
        path: "login",
        Component: Login,
      },

      {
        path: "dashboard",
        Component: ShopSelect,
      },

      {
        path: "shop",
        Component: ShopView,
      },

      {
        Component: DashboardLayout,
        loader: shopLayoutLoader,

        children: [
          {
            path: "dashboard/:shopId",
            Component: DashboardRedirect,
          },
          {
            path: "dashboard/:shopId/overview",
            Component: DashboardOverview,
          },
        ],
      },
    ],
  },
];
