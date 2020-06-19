import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarLink = ({ url, title }) => {
  return (
    <li className="navbar-item">
      <Link to={url} className="navbar-link is-arrowless">
        {title}
      </Link>
    </li>
  );
};

NavbarLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

NavbarLink.defaultProps = {
  url: "/",
  title: "",
};

export default NavbarLink;
