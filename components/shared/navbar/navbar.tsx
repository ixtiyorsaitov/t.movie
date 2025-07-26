import React from "react";
import NavigationItems from "./navigation-items";
import NavigationBar from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between mt-4">
      <NavigationItems />

      <NavigationBar />
    </div>
  );
};

export default Navbar;
