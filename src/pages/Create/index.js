import React from "react";
import PageHeader from "../partials/PageHeader";
import PageFooter from "../partials/PageFooter";

import CompactLayout from "../../layouts/note/CompactLayout";

export default class Create extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <main>
          <CompactLayout />
        </main>
        <PageFooter />
      </React.Fragment>
    );
  }
}
