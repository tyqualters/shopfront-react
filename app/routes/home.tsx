import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

import {
  BsShop,
  BsBank,
  BsBuildingGear,
  BsBox2,
  BsShieldLock,
  BsEmojiSunglasses,
} from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-base-content">
          Vender eCommerce
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl mb-6">
            Don&apos;t miss out on sales opportunities. Get your eShop online
            now!
          </p>
          <div className="grid gap-2 sm:flex sm:justify-center">
            <a href="#" className="btn btn-primary btn-lg px-6">
              Get started
            </a>
            <a href="#icon-grid" className="btn btn-outline btn-lg px-6">
              Learn more
            </a>
          </div>
          <div className="container px-5 pt-15 mx-auto">
            <img
              src="/assets/Figma_ai_shopcart.png"
              className="block mx-auto max-w-full h-auto border border-base-300 rounded-box shadow-2xl mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12" id="icon-grid">
        <h2 className="pb-2 text-2xl font-bold border-b border-base-300 text-base-content">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          <div className="flex items-start">
            <BsShop
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                Multiple shops
              </h3>
              <p className="text-base-content/70">
                Manage multiple shops on one account.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <BsBank
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                Multiple processors
              </h3>
              <p className="text-base-content/70">
                PayPal, Stripe, and custom payment processors.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <BsBuildingGear
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                Easy integration
              </h3>
              <p className="text-base-content/70">
                Add your shops directly to your website.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <BsBox2
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                Order management
              </h3>
              <p className="text-base-content/70">
                View and manage orders seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <BsShieldLock
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                Secure by Design
              </h3>
              <p className="text-base-content/70">
                Keep your password safe, we&apos;ll take care of the rest.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <BsEmojiSunglasses
              className="w-7 h-7 text-base-content/60 shrink-0 mr-3 fill-current"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-bold text-xl text-base-content mb-1">
                No B.S.
              </h3>
              <p className="text-base-content/70">
                One price, every feature. No extra paywalls.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
