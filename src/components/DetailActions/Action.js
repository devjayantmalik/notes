import React from "react";
import PropTypes from "prop-types";

const Action = ({ className, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`button is-outlined mx-3 my-3 ${className}`}
    >
      {title}
    </button>
  );
};

Action.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Action.defaultProps = {
  title: "Button",
  className: "",
};

export default Action;
