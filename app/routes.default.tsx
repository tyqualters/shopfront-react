import type { RouteObject } from "react-router";

import DefaultLayout from "./layouts/default-layout";
import DashboardLayout from "./routes/dashboard-layout";

import Home from "./routes/home";
import Register from "./routes/register";
import RegisterShop from "./routes/register-shop";
import RegisterProduct from "./routes/register-product";
import Login from "./routes/login";
import ShopSelect from "./routes/shop-select";
import ShopView from "./routes/shop-view";

import DashboardRedirect from "./routes/dashboard-redirect";
import DashboardOverview from "./routes/dashboard-overview";
import DashboardSettings from "./routes/dashboard-settings";

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

        children: [
          {
            path: "dashboard/:shopId",
            Component: DashboardRedirect,
          },
          {
            path: "dashboard/:shopId/overview",
            Component: DashboardOverview,
          },
          {
            path: "dashboard/:shopId/settings",
            Component: DashboardSettings,
          },
        ],
      },
    ],
  },
];
