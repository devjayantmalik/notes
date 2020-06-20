import { createStore } from "redux";
import appReducers from "./reducers";

export default (initialState) => {
  initialState = JSON.parse(localStorage.getItem("state")) || initialState;

  const store = createStore(appReducers, initialState);

  store.subscribe(() => {
    const persist = {
      notes: store.getState("notes"),
      categories: store.getState("categories"),
      stats: store.getState("stats"),
    };

    localStorage.setItem("state", JSON.stringify(persist));
  });

  return store;
};
