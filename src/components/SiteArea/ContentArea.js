import React from "react";

const ContentArea = ({ children }) => {
  return (
    <section className="column mx-2 my-2">
      <div className="content">{children}</div>
    </section>
  );
};

export default ContentArea;
