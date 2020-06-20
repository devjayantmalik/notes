import { UPDATE_SORT } from "./actionTypes";

export default (state = "", action) => {
  switch (action.type) {
    case UPDATE_SORT:
      return action.payload;
    default:
      return state;
  }
};
