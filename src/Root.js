import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./Router";

import store from "./services/store";

const Root = ({ initialState }) => (
  <Provider store={store(initialState)}>
    <AppRouter />
  </Provider>
);

export default Root;
