import { Outlet, useLoaderData, redirect } from "react-router";

// 1. In Library mode, write standard async loader functions
export async function shopLayoutLoader() {
  const res = await fetch("/api/whoami");

  // Handle unauthorized/unauthenticated users directly in the loader
  if (res.status === 401 || !res.ok) {
    throw redirect("/login");
  }

  const userSessionData = await res.json();
  return { userSessionData };
}

// Define your Loader Data type directly
export type ShopLayoutLoaderData = Awaited<ReturnType<typeof shopLayoutLoader>>;

export default function ShopLayout() {
  // 2. Access the data safely in the component
  const { userSessionData } = useLoaderData() as ShopLayoutLoaderData;

  return (
    <div className="flex min-h-screen">
      {/* Permanent Sidebar */}
      <aside className="w-64 bg-base-200">{/* Sidebar content */}</aside>

      {/* Main Content: Pass session data down via context */}
      <main className="flex-1 p-6">
        <Outlet context={{ userSessionData }} />
      </main>
    </div>
  );
}
