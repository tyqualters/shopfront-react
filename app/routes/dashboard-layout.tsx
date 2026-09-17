import { Outlet, /*useLoaderData,*/ Navigate } from "react-router";
//import type { Route } from "./+types/dashboard-layout";
import { AuthWrapper } from "../components/authwrap.tsx";

//export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//  // Executes ONCE when entering /dashboard/:shopId
//  const res = await fetch(`/api/shops/${params.shopId}/session-data`);
//  if (!res.ok) throw new Error("Failed to load shop session data");
//
//  const shopSessionData = await res.json();
//  return { shopSessionData };
//}

export default function ShopLayout() {
  //const { shopSessionData } = useLoaderData<typeof clientLoader>();

  return (
    <AuthWrapper fallback={<Navigate to="/login" />}>
      <div className="flex min-h-screen">
        {/* Permanent Sidebar */}
        <aside className="w-64 bg-base-200">...</aside>

        {/* Main Content: Pass session data down via context */}
        <main className="flex-1 p-6">
          <Outlet /*context={{ shopSessionData }}*/ />
        </main>
      </div>
    </AuthWrapper>
  );
}
