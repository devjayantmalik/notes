import { UPDATE_SORT } from "./actionTypes";

export const sort = (sortBy) => {
  return { type: UPDATE_SORT, payload: sortBy };
};
