import React from "react";
import QuickDetails from "../../components/QuickDetails";
import PreviewPanel from "../../components/PreviewPanel";
import Spinner from "../../components/Spinner";
import { connect } from "react-redux";
import { fetchNote } from "../../services/notes/actions";

class Detail extends React.Component {
  state = { loading: true };

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id, () => {
      this.setState({ loading: false });
    });
  }

  _getPreviewContent = (content) => {
    // convert the content to html and return
    return content;
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    const { title, description, pub_date, category, content } = this.props.note;
    return (
      <main className="container py-3 px-3">
        <QuickDetails
          title={title || ""}
          description={description || ""}
          date={new Date(pub_date)}
          category={category || ""}
        />
        <PreviewPanel html={this._getPreviewContent(content)} />
      </main>
    );
  }
}

const mapStateToProps = ({ notes }, onwProps) => {
  const note =
    notes.find(
      (note) => parseInt(note.id) === parseInt(onwProps.match.params.id)
    ) || {};
  return { note };
};

export default connect(mapStateToProps, { fetchNote })(Detail);
