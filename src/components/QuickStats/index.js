import React from "react";
import StatItem from "./StatItem";

export default class QuickStats extends React.Component {
  static Item = StatItem;
  render() {
    return (
      <div className="container my-3 mx-auto py-3">
        <section className="level is-mobile">{this.props.children}</section>
      </div>
    );
  }
}
