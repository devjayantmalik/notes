import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
};

FooterLink.defaultProps = {
  to: "#",
  children: "It's a link",
};

export default FooterLink;
