import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./actionTypes";
import { _update } from "../util";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);
    case UPDATE_NOTE:
      return _update(state, action.payload.old, action.payload.updated);
    default:
      return state;
  }
};
