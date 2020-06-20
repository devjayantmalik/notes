import { UPDATE_FILTER } from "./actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return [...state, action.payload];
    default:
      return state;
  }
};
