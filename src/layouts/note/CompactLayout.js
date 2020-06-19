import React from "react";
import SiteArea, { LeftSidebar, ContentArea } from "../../components/SiteArea";
import NoteForm from "../../components/NoteForm";
import TabsPanel from "../../components/TabsPanel";
import PreviewPanel from "../../components/PreviewPanel";
import EditorTab from "../../components/EditorTab";

export default class CompactLayout extends React.Component {
  state = { editor: true, content: "" };

  _handleEditorClick = () => {
    if (this.state.editor === false) {
      this.setState({ editor: true });
    }
  };

  _handlePreviewClick = () => {
    if (this.state.editor === true) {
      this.setState({ editor: false });
    }
  };

  _handleEditorTextChange = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <SiteArea>
        <LeftSidebar>
          <NoteForm />
        </LeftSidebar>
        <ContentArea>
          <TabsPanel
            onEditorClick={this._handleEditorClick}
            onPreviewClick={this._handlePreviewClick}
          />
          <div>
            {this.state.editor && (
              <EditorTab
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
