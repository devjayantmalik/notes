import React from "react";

export default class SortPanel extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="level is-mobile">
          <div className="level-left">
            <p className="field">
              <label className="label">Sort By</label>
              <select className="select">
                <option>Date</option>
                <option>Title</option>
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
