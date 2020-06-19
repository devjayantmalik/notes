import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header";

const PageHeader = () => {
  return (
    <Header brandTitle="Notes" brandLogo={logo}>
      <Header.Link to="/" title="Home" />
      <Header.Link to="/" title="Timeline" />
      <Header.Link to="/" title="New Note" />
      <Header.Link to="/" title="New Category" />
      <Header.Link to="/" title="About" />
      <Header.Link to="/" title="Contact" />
    </Header>
  );
};

export default PageHeader;
