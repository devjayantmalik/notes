import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import PageHeader from "./pages/partials/PageHeader";
import PageFooter from "./pages/partials/PageFooter";
import Edit from "./pages/Edit";
import About from "./pages/About";
import NotFound from "./pages/404";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/about" exact component={About} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
};
