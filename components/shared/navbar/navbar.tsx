import React from "react";
import NavigationItems from "./navigation-items";
import NavigationBar from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="mt-4 flex w-full items-center justify-between md:pr-10 md:pl-7">
      <NavigationItems />

      <NavigationBar />
    </div>
  );
};

export default Navbar;
