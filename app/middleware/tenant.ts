import { createContext, type MiddlewareFunction } from "react-router";

export type AppType = "default" | "tenant";

export type Tenant = {
  hostname: string;
  app: AppType;
};

export const tenantContext = createContext<Tenant | null>(null);

export function getTenant(hostname: string): Tenant {
  hostname = hostname.toLowerCase();

  if (hostname === "localhost") {
    return {
      hostname,
      app: "default",
    };
  }

  if (hostname === "dev.local") {
    return {
      hostname,
      app: "tenant",
    };
  }

  throw new Response("Unknown domain", {
    status: 404,
  });
}

export function tenantMiddleware(expectedApp: AppType): MiddlewareFunction {
  return async ({ request, context }, next) => {
    const hostname = new URL(request.url).hostname;

    const tenant = getTenant(hostname);

    if (tenant.app !== expectedApp) {
      throw new Response("Not Found", {
        status: 404,
      });
    }

    context.set(tenantContext, tenant);

    return next();
  };
}
