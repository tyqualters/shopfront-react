import { Outlet, useLoaderData, Navigate } from "react-router";
import type { Route } from "./+types/dashboard-layout";
import { AuthWrapper } from "../components/authwrap.tsx";

export async function clientLoader({}: Route.ClientLoaderArgs) {
  // Executes ONCE when entering /dashboard/:shopId
  const res = await fetch(`/api/whoami`);
  if (!res.ok) throw new Error("Failed to load user data");

  const userSessionData = await res.json();
  return { userSessionData };
}

export default function ShopLayout() {
  const { userSessionData } = useLoaderData<typeof clientLoader>();

  return (
    <AuthWrapper fallback={<Navigate to="/login" />}>
      <div className="flex min-h-screen">
        {/* Permanent Sidebar */}
        <aside className="w-64 bg-base-200">...</aside>

        {/* Main Content: Pass session data down via context */}
        <main className="flex-1 p-6">
          <Outlet context={{ userSessionData }} />
        </main>
      </div>
    </AuthWrapper>
  );
}
