import React from "react";
import PageHeader from "../partials/PageHeader";
import PageFooter from "../partials/PageFooter";
import QuickDetails from "../../components/QuickDetails";
import DetailActions from "../../components/DetailActions";
import PreviewPanel from "../../components/PreviewPanel";

export default class Detail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <main className="container py-3 px-3">
          <QuickDetails
            title="This is my beautiful title, please note that i usually write long titles for my note."
            description="This is the long piece of text in about 200 words, and this piece of text will act as description of the note. I have not made any spelling mistakes in the description. Please go ahead and check it out."
            date={new Date()}
            category="Arts"
          />
          <PreviewPanel html={"<h1>Hello</h1>"} />
          <DetailActions />
        </main>
        <PageFooter />
      </React.Fragment>
    );
  }
}
