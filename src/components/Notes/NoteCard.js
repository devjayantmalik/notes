import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteCard = (props) => {
  const { category, date, title, description } = props.note;
  const { detailUrl, editUrl, deleteUrl, onFavorite } = props;

  return (
    <div className="column is-one-third-desktop is-full-tablet">
      <article className="card">
        <header className="card-header">
          <p className="card-header-title">{category}</p>

          <p className="card-header-icon">{new Date(date).toDateString()}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <h2 className="is-size-5">
              {(title.length > 73 && title.substr(0, 73) + "...") || title}
            </h2>
            <p className="is-family-monospaced">
              {(description.length > 190 &&
                description.substr(0, 190) + "...") ||
                description}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          {detailUrl && (
            <Link to={detailUrl} className="card-footer-item">
              Details
            </Link>
          )}
          {editUrl && (
            <Link to={editUrl} className="card-footer-item">
              Edit
            </Link>
          )}
          {deleteUrl && (
            <Link to={deleteUrl} className="card-footer-item">
              Delete
            </Link>
          )}
          {onFavorite && <button className="card-footer-item">Favorite</button>}
        </footer>
      </article>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object,
  detailUrl: PropTypes.string.isRequired,
  editUrl: PropTypes.string.isRequired,
  deleteUrl: PropTypes.string.isRequired,
  onFavorite: PropTypes.func,
};

NoteCard.defaultProps = {
  note: {
    title: "",
    description: "",
    category: "",
    date: new Date(),
  },
};

export default NoteCard;
