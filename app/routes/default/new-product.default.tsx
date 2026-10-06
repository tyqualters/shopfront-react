import { Link } from "react-router";
import { useState, useEffect } from "react";

const Register = () => {
  const [shopId, setShopId] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramShopId = searchParams.get("shopid");

    if (paramShopId) {
      setShopId(paramShopId);
    }
  }, []);
  return (
    <>
      <main className="w-full max-w-xs m-auto min-h-screen flex flex-col justify-center items-center p-4">
        <form
          action="/api/register-product"
          method="POST"
          className="w-full flex flex-col gap-3"
        >
          <h1 className="text-2xl font-normal text-center mb-2">
            Create a shop
          </h1>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="product_name"
              placeholder="Product name"
              className="grow"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="product_price"
              placeholder="Product price"
              className="grow"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="product_shopid"
              placeholder="Shop ID"
              value={shopId}
              className="grow"
              required
            />
          </label>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Create product
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="link link-hover text-primary text-sm">
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Register;
