import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarLink = ({ to, title }) => {
  return (
    <li className="navbar-item">
      <Link to={to} className="navbar-link is-arrowless">
        {title}
      </Link>
    </li>
  );
};

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

NavbarLink.defaultProps = {
  to: "/",
  title: "",
};

export default NavbarLink;
