import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full mx-auto max-w-screen-xl p-8 mt-10 md:flex md:items-center md:justify-between">
      <span className="text-sm font-medium text-gray-500 sm:text-center ">
        © 2024 Made with ❤️ by Suman Kumar Dey
      </span>
      <ul className="hidden md:flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 sm:mt-0">
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
