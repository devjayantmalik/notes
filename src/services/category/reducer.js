import { UPDATE_CATEGORY, ADD_CATEGORY, REMOVE_CATEGORY } from "./actionTypes";
import { _update } from "../util";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
      return state.filter((cat) => cat.id !== action.payload.id);
    case UPDATE_CATEGORY:
      return _update(state, action.payload.old, action.payload.updated);
    default:
      return state;
  }
};
