import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteCard = (props) => {
  const { id, category, pub_date, title, description } = props.note;
  const { detailUrl, editUrl, onDelete } = props;

  return (
    <div className="column is-one-third-desktop is-full-tablet">
      <article className="card">
        <header className="card-header">
          <p className="card-header-title">{category}</p>

          <p className="card-header-icon">
            {new Date(pub_date).toDateString()}
          </p>
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
          {onDelete && (
            <Link
              to=""
              onClick={() => onDelete(id)}
              className="card-footer-item"
            >
              Delete
            </Link>
          )}
        </footer>
      </article>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object,
  detailUrl: PropTypes.string.isRequired,
  editUrl: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

NoteCard.defaultProps = {
  note: {
    title: "",
    description: "",
    category: "",
    pub_date: new Date(),
  },
};

export default NoteCard;
