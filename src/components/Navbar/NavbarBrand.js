import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarBrand = ({ destinationUrl, logoUrl, title }) => {
  return (
    <div className="navbar-brand">
      <Link to={destinationUrl} className="navbar-item">
        {logoUrl && <img src={logoUrl} alt="site logo" />}
        <span className="mx-2">{title}</span>
      </Link>
    </div>
  );
};

NavbarBrand.defaultProps = {
  destinationUrl: "/",
  title: "Home",
};

NavbarBrand.propTypes = {
  destinationUrl: PropTypes.string,
  title: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default NavbarBrand;
