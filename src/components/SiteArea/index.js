import React from "react";

const SiteArea = ({ children }) => {
  return (
    <section className="section">
      <div className="columns">{children}</div>
    </section>
  );
};

export const LeftSidebar = ({ children }) => {
  return <aside className="column is-one-quarter mx-2 my-2">{children}</aside>;
};

export const ContentArea = ({ children }) => {
  return (
    <section className="column mx-2 my-2">
      <div className="content">{children}</div>
    </section>
  );
};

export default SiteArea;
