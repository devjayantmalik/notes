import React from "react";
import SiteArea, { LeftSidebar, ContentArea } from "../../components/SiteArea";
import NoteForm from "../../components/NoteForm";
import TabsPanel from "../../components/TabsPanel";
import PreviewPanel from "../../components/PreviewPanel";
import EditorTab from "../../components/EditorTab";

import PropTypes from "prop-types";

export default class CompactLayout extends React.Component {
  state = { editor: true, content: "" };

  _handleEditorClick = () => {
    if (this.state.editor === false) {
      this.setState({ editor: true });
    }
  };

  componentDidMount() {
    if (this.props.defaultValues) {
      this.setState({ content: this.props.defaultValues.content });
    }
  }

  _handlePreviewClick = () => {
    if (this.state.editor === true) {
      this.setState({ editor: false });
    }
  };

  _handleNoteFormSubmit = (info) => {
    if (this.state.content.length < 5) {
      return alert("Please fill the content with atleast 5 characters.");
    }

    // send the submit info to the parent
    this.props.onSubmit({ ...info, content: this.state.content });
  };

  _handleEditorTextChange = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <SiteArea>
        <LeftSidebar>
          <NoteForm
            defaultValues={this.props.defaultValues}
            onSubmit={this._handleNoteFormSubmit}
          />
        </LeftSidebar>
        <ContentArea>
          <TabsPanel
            onEditorClick={this._handleEditorClick}
            onPreviewClick={this._handlePreviewClick}
          />
          <div>
            {this.state.editor && (
              <EditorTab
                placeholder="Enter Your note in markdown here to store your precious knowledge. And you are free to hack it with script tags if you like."
                onChange={this._handleEditorTextChange}
                content={this.state.content}
              />
            )}
            {!this.state.editor && <PreviewPanel html={this.state.content} />}
          </div>
        </ContentArea>
      </SiteArea>
    );
  }
}

CompactLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};
