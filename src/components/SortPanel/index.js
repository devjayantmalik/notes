import React from "react";
import { connect } from "react-redux";
import { SORT_OPTIONS } from "../../services/util";
import { fetchNotes } from "../../services/notes/actions";

class SortPanel extends React.Component {
  _handleSortChange = (e) => {
    this.props.fetchNotes(null, e.target.value);
  };

  render() {
    return (
      <section className="section">
        <div className="level is-mobile">
          <div className="level-left">
            <p className="field">
              <label className="label">Sort By</label>
              <select className="select" onChange={this._handleSortChange}>
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.title}
                  </option>
                ))}
              </select>
            </p>
          </div>
          <div className="level-right">
            <p className="field">
              <label className="label">View As</label>
              <select className="select">
                <option>Grid</option>
                <option>Table</option>
              </select>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { fetchNotes })(SortPanel);
