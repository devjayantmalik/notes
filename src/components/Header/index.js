import React from "react";
import NavbarLink from "./NavbarLink";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  static Link = NavbarLink;

  render() {
    const { brandUrl, brandLogo, brandTitle } = this.props;
    return (
      <header>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <Link to={brandUrl} className="navbar-item">
              {brandLogo && <img src={brandLogo} alt="site logo" />}
              <span className="mx-2">{brandTitle}</span>
            </Link>

            <div className="navbar-burger burger" role="button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-menu">
            <ul className="navbar-end">{this.props.children}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  brandTitle: PropTypes.string,
  brandLogo: PropTypes.string,
  brandUrl: PropTypes.string,
};

Header.defaultProps = {
  brandTitle: "Home",
  brandUrl: "/",
};
