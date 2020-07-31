import React from "react";
import PropTypes from "prop-types";

const QuickDetails = (props) => {
  const { title, description, date, category } = props;
  return (
    <section className="section mx-auto my-3 py-3">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="has-text-weight-bold is-uppercase" title={title}>
                {title.length > 50 ? title.substr(0, 50) + "..." : title}
              </p>
              <p className="is-family-monospace" title={description}>
                {description.length > 50
                  ? description.substr(0, 50) + "..."
                  : description}
              </p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <div>
              <p
                title={`Category: ${category}`}
                className="is-uppercase has-text-weight-bold"
              >
                {category}
              </p>
              <p
                title={`Posted on: ${new Date(date).toDateString()}`}
                className="is-family-code"
              >
                {new Date(date).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

QuickDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

QuickDetails.defaultProps = {
  note: {
    title: "Title not provided",
    description: "Description not provided",
    date: new Date(),
    category: "Category not provided",
  },
};

export default QuickDetails;
