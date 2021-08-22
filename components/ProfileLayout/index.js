import React from "react";

import Nav from "../Nav";
import SideBar from "../SideBar";
import ProfileHero from "../ProfileHero";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gray-900">
        <ProfileHero />
        <div
          style={{ minHeight: "calc(100vh - 320px)" }}
          className="h-full w-full relative md:flex"
        >
          <SideBar></SideBar>
          <div>{children}</div>
        </div>
      </main>
    </>
  );
};

export default ProfileLayout;
