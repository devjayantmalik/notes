import React from "react";
import StatItem from "./StatItem";
import { connect } from "react-redux";

const QuickStats = ({ stats }) => (
  <div className="container my-3 mx-auto py-3">
    <section className="level is-mobile">
      <StatItem title="Total Notes" value={stats.totalNotes} />
      <StatItem title="Total Categories" value={stats.totalCategories} />
      <StatItem title="Posted Today" value={stats.postedToday} />
      <StatItem title="Favorites" value={stats.favorites} />
    </section>
  </div>
);

const mapStateToProps = (state) => {
  const postedToday = state.notes.filter((note) => {
    let dt = new Date(note.pub_date);
    return dt.getDate() === new Date().getDate();
  }).length;
  const favorites = state.notes.filter((note) => note.is_favorite).length;
  const stats = {
    totalNotes: state.notes.length,
    totalCategories: state.categories.length,
    postedToday: postedToday,
    favorites: favorites,
  };
  return { stats: stats };
};

export default connect(mapStateToProps, {})(QuickStats);
