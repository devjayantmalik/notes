import React from "react";
import PropTypes from "prop-types";

const EditorTab = ({ placeholder, rows, onChange, content }) => {
  return (
    <textarea
      className="textarea"
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={content}
    ></textarea>
  );
};

EditorTab.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  content: PropTypes.string,
};

EditorTab.defaultProps = {
  placeholder: "",
  rows: 20,
  onChange: () => {},
  content: "",
};

export default EditorTab;
