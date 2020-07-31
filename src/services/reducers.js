import { combineReducers } from "redux";

import NoteReducer from "./notes/reducer";
import CategoryReducer from "./category/reducer";

export default combineReducers({
  notes: NoteReducer,
  categories: CategoryReducer,
});
