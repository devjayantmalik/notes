import React from "react";
import QuickStats from "../../components/QuickStats";
import SiteArea, { LeftSidebar, ContentArea } from "../../components/SiteArea";
import CategoryPanel from "../../components/CategoryPanel";
import SortPanel from "../../components/SortPanel";
import Notes from "../../components/Notes";

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <QuickStats />

        <SiteArea>
          <LeftSidebar>
            <CategoryPanel />
          </LeftSidebar>

          <ContentArea>
            <SortPanel />
            <Notes />
          </ContentArea>
        </SiteArea>
      </main>
    );
  }
}
