import React from "react";
import CategoryItem from "./CategoryItem";

export default class CategoryPanel extends React.Component {
  static Item = CategoryItem;

  render() {
    return (
      <nav className="menu">
        <h1 className="menu-label">Categories</h1>
        <ul className="menu-list">{this.props.children}</ul>
      </nav>
    );
  }
}
