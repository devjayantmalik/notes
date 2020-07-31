import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class TabsPanel extends React.Component {
  state = { editorPaneActive: true };

  _handleEditorClick = (e) => {
    if (this.state.editorPaneActive === false) {
      this.setState({ editorPaneActive: true });
    }

    this.props.onEditorClick();
  };

  _handlePreviewClick = () => {
    if (this.state.editorPaneActive === true) {
      this.setState({ editorPaneActive: false });
    }

    this.props.onPreviewClick();
  };

  render() {
    const editor = this.state.editorPaneActive;
    return (
      <div className="tabs">
        <ul>
          <li className={`${editor && "is-active"}`}>
            <Link to="#" role="button" onClick={this._handleEditorClick}>
              Editor
            </Link>
          </li>
          <li className={`${!editor && "is-active"}`}>
            <Link to="#" role="button" onClick={this._handlePreviewClick}>
              Preview
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

TabsPanel.propTypes = {
  onPreviewClick: PropTypes.func.isRequired,
  onEditorClick: PropTypes.func.isRequired,
};

TabsPanel.defaultProps = {
  onPreviewClick: () => {},
  onEditorClick: () => {},
};
