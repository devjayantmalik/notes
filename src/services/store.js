import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducers from "./reducers";

export default (initialState) => {
  const middlewares = [thunk];
  return createStore(
    appReducers,
    initialState,
    applyMiddleware(...middlewares)
  );
};
