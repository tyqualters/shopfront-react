import { createBrowserRouter } from "react-router";

import { defaultRoutes } from "./routes.default";
import { tenantRoutes } from "./routes.tenant";
import { getAppType } from "./resolver";

const routes = getAppType() === "tenant" ? tenantRoutes : defaultRoutes;

export const router = createBrowserRouter(routes);
