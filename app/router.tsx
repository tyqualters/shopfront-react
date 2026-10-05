import { createBrowserRouter } from "react-router";

import { defaultRoutes } from "./default-routes";
import { tenantRoutes } from "./tenant-routes";
import { getAppType } from "./tenant";

const routes = getAppType() === "tenant" ? tenantRoutes : defaultRoutes;

export const router = createBrowserRouter(routes);
