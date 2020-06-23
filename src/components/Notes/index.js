import React from "react";
import NoteCard from "./NoteCard";
import Spinner from "../Spinner";

import { connect } from "react-redux";
import { fetchNotes, removeNote } from "../../services/notes/actions";

class Notes extends React.Component {
  state = { loading: true };

  componentDidMount() {
    this.props.fetchNotes(null, null, () => {
      this.setState({ loading: false });
    });
  }

  _handleDelete = (id) => {
    this.props.removeNote(id);
    alert(
      "Note deleted successfully, please refresh the page to see the changes."
    );
  };

  _renderNotes = () => {
    if (this.state.loading) {
      return <Spinner />;
    }
    return this.props.notes.map((note) => (
      <NoteCard
        key={note.id}
        note={note}
        detailUrl={`/detail/${note.id}`}
        editUrl={`/edit/${note.id}`}
        onDelete={this._handleDelete}
      />
    ));
  };

  render() {
    return (
      <section className="section">
        <div className="columns is-multiline">{this._renderNotes()}</div>
      </section>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps, { fetchNotes, removeNote })(Notes);
