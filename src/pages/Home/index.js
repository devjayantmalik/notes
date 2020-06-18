import React from "react";
import Header from "../../components/Header";
import logo from "../../assets/home/logo.png";
import QuickStats from "../../components/QuickStats";
import SiteArea, { LeftSidebar, ContentArea } from "../../components/SiteArea";
import CategoryPanel from "../../components/CategoryPanel";
import SortPanel from "../../components/SortPanel";
import Notes from "../../components/Notes";
import Footer from "../../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header brandTitle="Notes" brandLogo={logo}>
          <Header.Link to="/" title="Home" />
          <Header.Link to="/" title="Timeline" />
          <Header.Link to="/" title="New Note" />
          <Header.Link to="/" title="New Category" />
          <Header.Link to="/" title="About" />
          <Header.Link to="/" title="Contact" />
        </Header>

        <main>
          <QuickStats>
            <QuickStats.Item title="Total Notes" value="25" />
            <QuickStats.Item title="Total Categories" value="5" />
            <QuickStats.Item title="Posted Today" value="3" />
            <QuickStats.Item title="Favorites" value="10" />
          </QuickStats>

          <SiteArea>
            <LeftSidebar>
              <CategoryPanel>
                <CategoryPanel.Item categoryUrl="/" title="Programming" />
                <CategoryPanel.Item categoryUrl="/" title="Arts" />
                <CategoryPanel.Item categoryUrl="/" title="Science" />
                <CategoryPanel.Item categoryUrl="/" title="Misc" />
              </CategoryPanel>
            </LeftSidebar>
            <ContentArea>
              <SortPanel />
              <Notes />
            </ContentArea>
          </SiteArea>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
