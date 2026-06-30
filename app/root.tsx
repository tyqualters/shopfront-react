import {
  /*isRouteErrorResponse,*/
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type LinkDescriptor,
} from 'react-router'

import type { Route } from './+types/root'

export function links(): LinkDescriptor[] {
  return [
    { rel: "stylesheet", href: "/app/global.css" }
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
  	<Outlet />
  )
}

export function ErrorBoundary({ error: _error }: Route.ErrorBoundaryProps) {
  let message = 'Unexpected error has occurred.'

  return (
    <main>
      <h1 className="text-xl">{message}</h1>
    </main>
  )
}
