import { combineReducers } from "redux";

import NoteReducer from "./notes/reducer";
import CategoryReducer from "./category/reducer";
import SortReducer from "./sort/reducer";
import FilterReducer from "./filter/reducer";
import StatsReducer from "./stats/reducer";

export default combineReducers({
  notes: NoteReducer,
  categories: CategoryReducer,
  sort: SortReducer,
  filter: FilterReducer,
  stats: StatsReducer,
});
