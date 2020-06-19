import React from "react";

import { Link } from "react-router-dom";

const CategoryItem = ({ title, categoryUrl }) => {
  return (
    <li>
      <Link to={categoryUrl}>{title}</Link>
    </li>
  );
};

export default CategoryItem;
