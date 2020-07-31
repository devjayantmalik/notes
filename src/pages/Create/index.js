import React from "react";
import { connect } from "react-redux";
import { addNote } from "../../services/notes/actions";
import CompactLayout from "../../layouts/note/CompactLayout";

class Create extends React.Component {
  _handleSubmit = (note) => {
    this.props.addNote(note);
    this.props.history.goBack() || this.props.history.push("/");
  };

  render() {
    return (
      <main>
        <CompactLayout onSubmit={this._handleSubmit} />
      </main>
    );
  }
}

export default connect(null, { addNote })(Create);
