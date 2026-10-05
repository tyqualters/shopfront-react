import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("register", "routes/register.tsx"),
  route("register-shop", "routes/register-shop.tsx"),
  route("login", "routes/login.tsx"),
  route("dashboard", "routes/shop-select.tsx"),

  layout("routes/dashboard-layout.tsx", [
    route("dashboard/:shopId", "routes/dashboard-redirect.tsx"),
    route("dashboard/:shopId/overview", "routes/dashboard-overview.tsx"),
    route("dashboard/:shopId/settings", "routes/dashboard-settings.tsx"),
  ]),
] satisfies RouteConfig;
