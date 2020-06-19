import React from "react";
import FooterLink from "./FooterLink";
import PropTypes from "prop-types";

const FooterItem = ({ title, children }) => {
  return (
    <div className="column">
      <nav className="menu">
        <h2 className="menu-label">{title}</h2>
        <ul className="menu-list">{children}</ul>
      </nav>
    </div>
  );
};

FooterItem.Link = FooterLink;

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};

FooterItem.defaultProps = {
  title: "Links",
};

export default FooterItem;
