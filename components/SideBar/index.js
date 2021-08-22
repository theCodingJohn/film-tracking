import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { DashBoard } from "../../utils/icons";

const SideBar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div
      style={{ minHeight: "calc(100vh - 320px)" }}
      className="h-full w-52 absolute -left-52 md:relative md:left-0"
    >
      <button
        type="button"
        className="text-gray-100 right-2 top-2 absolute hover:text-red duration-300  focus:outline-none focus:text-red-light "
        aria-label="toggle menu"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>

      <div className="flex flex-col items-center px-4 py-8">
        <div
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/profile_images/1358750135103070208/Ez-75GfC_400x400.jpg)",
          }}
          className="w-16 h-16 rounded-full bg-no-repeat bg-cover bg-center border-3 border-solid border-red-light"
        ></div>
        <span className="text-xl text-gray-200 font-bold justify-self-end mt-2">
          John
        </span>
      </div>
      <div>
        <SideBarLink
          pathname={pathname}
          icon={<DashBoard />}
          title="dashboard"
        ></SideBarLink>
      </div>
    </div>
  );
};

const SideBarLink = ({ icon, title, pathname }) => (
  <div className="group relative flex w-full border-t border-b border-thin h-9 text-gray-200 text-sm">
    <Link href="/profile">
      <a className="absolute w-full h-full"></a>
    </Link>
    <div className="group-hover:text-red-light flex items-center w-full py-2 px-8">
      <div
        className={clsx(
          "group-hover:text-red-light mr-6 w-4 text-gray-200",
          pathname === `/profile/${title}` && "text-red-light"
        )}
      >
        {icon}
      </div>
      <span
        className={clsx(
          "group-hover:text-red-light capitalize",
          pathname === `/profile/${title}` && "text-red-light"
        )}
      >
        {title}
      </span>
    </div>
  </div>
);
export default SideBar;
