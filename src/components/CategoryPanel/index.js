import React from "react";
import CategoryItem from "./CategoryItem";
import { connect } from "react-redux";
import { fetchCategories } from "../../services/category/actions";

class CategoryPanel extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  _renderCategories = () => {
    if (this.props.categories.length === 0) {
      return (
        <>
          <li className="has-text-danger">No Category found.</li>
          <li className="has-text-danger">
            Let's get started by adding a category.
          </li>
        </>
      );
    }

    return this.props.categories.map((cat) => (
      <CategoryItem
        title={cat.title}
        categoryUrl={`/category/${cat.id}`}
        key={cat.id}
      />
    ));
  };

  render() {
    return (
      <nav className="menu">
        <h1 className="menu-label">Categories</h1>
        <ul className="menu-list">{this._renderCategories()}</ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories };
};

export default connect(mapStateToProps, { fetchCategories })(CategoryPanel);
