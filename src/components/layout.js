import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/about" className="text-blue-500 hover:text-blue-800">
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/contact" className="text-blue-500 hover:text-blue-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="mt-4">{children}</main>
    </div>
  );
};

export default Layout;
