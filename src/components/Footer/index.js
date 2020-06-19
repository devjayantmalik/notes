import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-multiline">
          <FooterItem title="Categories">
            <FooterItem.Link to="/">Link 1</FooterItem.Link>
            <FooterItem.Link to="/">Link 2</FooterItem.Link>
            <FooterItem.Link to="/">Link 3</FooterItem.Link>
            <FooterItem.Link to="/">Link 4</FooterItem.Link>
          </FooterItem>
          <FooterItem title="Categories">
            <FooterItem.Link to="/">Link 1</FooterItem.Link>
            <FooterItem.Link to="/">Link 2</FooterItem.Link>
            <FooterItem.Link to="/">Link 3</FooterItem.Link>
            <FooterItem.Link to="/">Link 4</FooterItem.Link>
          </FooterItem>
          <FooterItem title="Categories">
            <FooterItem.Link to="/">Link 1</FooterItem.Link>
            <FooterItem.Link to="/">Link 2</FooterItem.Link>
            <FooterItem.Link to="/">Link 3</FooterItem.Link>
            <FooterItem.Link to="/">Link 4</FooterItem.Link>
          </FooterItem>
          <FooterItem title="Categories">
            <FooterItem.Link to="/">Link 1</FooterItem.Link>
            <FooterItem.Link to="/">Link 2</FooterItem.Link>
            <FooterItem.Link to="/">Link 3</FooterItem.Link>
            <FooterItem.Link to="/">Link 4</FooterItem.Link>
          </FooterItem>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
