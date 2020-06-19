import React from "react";
import PropTypes from "prop-types";

const PreviewPanel = ({ html }) => {
  return (
    <section className="section">
      <article
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></article>
    </section>
  );
};

PreviewPanel.propTypes = {
  html: PropTypes.string.isRequired,
};

PreviewPanel.defaultProps = {
  html: "",
};

export default PreviewPanel;
