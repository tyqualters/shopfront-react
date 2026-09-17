import { Link } from "react-router";
import { useState, useEffect } from "react";

interface Shop {
  id: number;
  name: string;
}

export function ListShops() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/shops")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch shops");
        }
        return res.json();
      })
      .then((data) => {
        setShops(data.shops || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shops:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <>
      {shops.map((shop) => (
        <Link
          key={shop.id}
          to={`${shop.id}/overview`}
          className="btn btn-primary btn-lg w-full"
        >
          {shop.name}
        </Link>
      ))}
    </>
  );
}

function DashboardLayout() {
  return (
    <>
      <div className="container mx-auto flex justify-center w-full">
        <div className="w-full max-w-2xl flex flex-col gap-2 p-10 items-stretch">
          <h1 className="text-3xl font-bold">Select a shop</h1>
          <ListShops />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
