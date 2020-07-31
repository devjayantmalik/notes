import React from "react";
import PropTypes from "prop-types";
import { fetchCategories } from "../../services/category/actions";
import { connect } from "react-redux";

class NoteForm extends React.Component {
  state = {
    pub_date: new Date().toLocaleDateString(),
    is_favorite: false,
    category: "General",
  };

  componentDidMount() {
    this.props.fetchCategories();
    if (this.props.defaultValues) {
      this.setState({ ...this.props.defaultValues });
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form.
    this.props.onSubmit(this.state);
  };

  _handleChange = (name) => {
    return (e) => {
      this.setState({ [name]: e.target.value });
    };
  };

  _renderCategories = () => {
    const { category } = this.state;
    if (!this.props.categories.length) {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    }

    return (this.props.categories || []).map((cat) => (
      <option key={cat.id} value={cat.title}>
        {cat.title}
      </option>
    ));
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="px-3 py-3">
        <div className="control">
          <p className="field">
            <label className="label">Title</label>
            <input
              type="text"
              required
              maxLength={100}
              minLength={5}
              value={this.state.title || ""}
              onChange={this._handleChange("title")}
              className="input"
              placeholder="Enter note title"
            />
          </p>
          <p className="field">
            <label className="label">Description</label>
            <textarea
              required
              className="textarea"
              value={this.state.description || ""}
              rows={4}
              maxLength={250}
              minLength={5}
              onChange={this._handleChange("description")}
              placeholder="Enter Note description"
            ></textarea>
          </p>
          <p className="field">
            <label className="label">Date</label>
            <input
              required
              type="date"
              value={this.state.pub_date || new Date().toLocaleDateString()}
              onChange={this._handleChange("pub_date")}
              className="input"
              placeholder="Select Note Date."
            />
          </p>
          <p className="field">
            <label className="label">Category</label>
            <select
              required
              value={this.state.category || "General"}
              onChange={this._handleChange("category")}
            >
              {this._renderCategories()}
            </select>
          </p>
          <p className="field">
            <label className="label">Mark as Favorite</label>
            <select
              required
              className="select"
              onChange={this._handleChange("is_favorite")}
              value={this.state.is_favorite || false}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </p>
          <button
            className="button is-success is-fullwidth my-3 mx-3"
            type="submit"
          >
            Add Now
          </button>
        </div>
      </form>
    );
  }
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

const mapStateToProps = ({ categories }) => {
  return { categories };
};

export default connect(mapStateToProps, { fetchCategories })(NoteForm);
