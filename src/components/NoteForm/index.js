import React from "react";

class NoteForm extends React.Component {
  _handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form.
  };
  render() {
    return (
      <form onSubmit={this._handleSubmit} className="px-3 py-3">
        <div className="control">
          <p className="field">
            <label className="label">Title</label>
            <input
              type="text"
              className="input"
              placeholder="Enter note title"
            />
          </p>
          <p className="field">
            <label className="label">Description</label>
            <textarea
              className="textarea"
              rows={4}
              placeholder="Enter Note description"
            ></textarea>
          </p>
          <p className="field">
            <label className="label">Date</label>
            <input
              type="date"
              className="input"
              placeholder="Select Note Date."
            />
          </p>
          <p className="field">
            <label className="label">Category</label>
            <select>
              <option value="Arts">Arts</option>
              <option value="Programming">Programming</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
            </select>
          </p>
          <p className="field">
            <label className="label">Mark as Favorite</label>
            <select className="select">
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

export default NoteForm;
