import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import PageHeader from "./pages/partials/PageHeader";
import PageFooter from "./pages/partials/PageFooter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
};
