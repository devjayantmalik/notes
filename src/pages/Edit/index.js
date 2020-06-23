import React from "react";
import { connect } from "react-redux";
import { updateNote, fetchNote } from "../../services/notes/actions";
import CompactLayout from "../../layouts/note/CompactLayout";
import Spinner from "../../components/Spinner";

class Edit extends React.Component {
  state = { loading: true };

  componentDidMount() {
    this.props.fetchNote(this.props.noteId, () => {
      this.setState({ loading: false });
    });
  }

  _handleSubmit = (note) => {
    this.props.updateNote(this.props.note.id, note);
    this.props.history.push("/");
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    if (!this.props.note) {
      return (
        <p className="has-text-danger is-size-1">Invalid note id provided.</p>
      );
    }

    return (
      <main>
        <CompactLayout
          defaultValues={this.props.note}
          onSubmit={this._handleSubmit}
        />
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const noteId = ownProps.match.params.id;
  const note =
    state.notes.find((note) => parseInt(note.id) === parseInt(noteId)) || {};

  return { note, noteId };
};

export default connect(mapStateToProps, { updateNote, fetchNote })(Edit);
