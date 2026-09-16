import { BsCart3, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <footer className="flex flex-wrap justify-between items-center py-3 my-4 border-t border-base-300">
        {/* Left Side: Logo & Copyright */}
        <div className="w-full md:w-1/3 flex items-center mb-3 md:mb-0">
          <a
            href="/"
            className="me-2 text-base-content/60 hover:text-primary transition-colors leading-none"
            aria-label="Bootstrap"
          >
            <BsCart3 className="w-7 h-6" aria-hidden="true" />
          </a>
          <span className="text-base-content/60">&copy; 2026 Vender, Inc</span>
        </div>

        {/* Right Side: Social Links */}
        <ul className="w-full md:w-1/3 flex justify-start md:justify-end items-center list-none p-0 m-0 space-x-4">
          <li>
            <a
              className="text-base-content/60 hover:text-primary transition-colors"
              href="#"
              aria-label="Instagram"
            >
              <BsInstagram className="w-6 h-6" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              className="text-base-content/60 hover:text-primary transition-colors"
              href="#"
              aria-label="Facebook"
            >
              <BsFacebook className="w-6 h-6" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
