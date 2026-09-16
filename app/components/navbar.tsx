import { Link } from "react-router";

const NavBar = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 my-2 md:my-0">
      <li>
        <Link
          to="/"
          className="px-2 py-1 text-base-content/70 hover:text-base-content transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <div
          className="tooltip tooltip-bottom"
          data-tip="Page under construction"
        >
          <Link
            to="#"
            className="px-2 py-1 text-base-content/70 hover:text-base-content transition-colors pointer-events-none cursor-not-allowed"
          >
            Pricing
          </Link>
        </div>
      </li>
      <li>
        <div
          className="tooltip tooltip-bottom"
          data-tip="Page under construction"
        >
          <Link
            to="#"
            className="px-2 py-1 text-base-content/70 hover:text-base-content transition-colors pointer-events-none cursor-not-allowed"
          >
            Contact
          </Link>
        </div>
      </li>
      <li>
        <div
          className="tooltip tooltip-bottom"
          data-tip="Page under construction"
        >
          <Link
            to="#"
            className="px-2 py-1 text-base-content/70 hover:text-base-content transition-colors pointer-events-none cursor-not-allowed"
          >
            Developers
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
