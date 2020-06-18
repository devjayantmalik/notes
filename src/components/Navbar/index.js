import React from "react";
import { Link } from "react-router-dom";

import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        {this.props.navbarBrand}
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="#" className="navbar-item" />
          </div>
        </div>
        <div className="navbar-menu"></div>
      </nav>
    );
  }
}

export default Navbar;

<Navbar>
  <Navbar.Brand title="" />
  <Navbar.Link title="" />
</Navbar>;
