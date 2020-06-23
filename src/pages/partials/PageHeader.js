import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header";

const PageHeader = () => {
  return (
    <Header brandTitle="Notes" brandLogo={logo}>
      <Header.Link to="/" title="Home" />
      <Header.Link to="/create" title="New Note" />
      <Header.Link to="/about" title="About" />
    </Header>
  );
};

export default PageHeader;
