import {
  /*isRouteErrorResponse,*/
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type LinkDescriptor,
} from "react-router";

import type { Route } from "./+types/root";

import "./global.css";

export function links(): LinkDescriptor[] {
  return [];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Vender eCommerce</title>
        <link
          rel="shortcut icon"
          href="/assets/Figma_Logo.png"
          type="image/png"
        />
        <link rel="icon" href="/assets/Figma_Logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error: _error }: Route.ErrorBoundaryProps) {
  let message = "Unexpected error has occurred.";

  console.error(_error);

  return <h1 className="text-xl">{message}</h1>;
}
