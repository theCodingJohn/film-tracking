import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import logo from "../../public/logo-white.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-screen shadow bg-transparent">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className=" text-2xl font-bold text-white lg:text-3xl">
                <Image width={118} height={21} src={logo} alt="App Logo" />
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-100 hover:text-red duration-300  focus:outline-none focus:text-red-light "
              aria-label="toggle menu"
              onClick={toggleNav}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={clsx(
            "w-full md:flex md:items-center md:justify-between",
            !isOpen && "hidden"
          )}
        >
          <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
            <Link href="/">
              <a
                href="#"
                className="px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded hover:bg-red-light hover:text-gray-100 md:mx-2"
              >
                Home
              </a>
            </Link>
            <Link href="/profile/dashboard">
              <a
                href="#"
                className="px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded hover:bg-red-light hover:text-gray-100 md:mx-2"
              >
                Profile
              </a>
            </Link>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-0.5 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-red-light focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
