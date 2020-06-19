import React from "react";
import LeftSidebar from "./LeftSidebar";
import ContentArea from "./ContentArea";

const SiteArea = ({ children }) => {
  return (
    <section className="section">
      <div className="columns">{children}</div>
    </section>
  );
};

export default SiteArea;
export { LeftSidebar, ContentArea };
