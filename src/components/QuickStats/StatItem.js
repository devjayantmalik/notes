import React from "react";
import PropTypes from "prop-types";

const StatItem = ({ title, value }) => {
  return (
    <div className="level-item has-text-centered">
      <div>
        <p className="heading is-size-6-tablet">{title}</p>
        <p className="title is-family-code">{value}</p>
      </div>
    </div>
  );
};

StatItem.defaultProps = {
  title: "",
  value: "",
};

StatItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatItem;
