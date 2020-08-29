import * as React from "react";
import NavLink from "./NavLink.tsx";

const Header = () => (
  <div>
    <header>
      <NavLink />
      <p className="header">Today's Advice</p>
    </header>
  </div>
);

export default Header;
