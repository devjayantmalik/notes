import { UPDATE_FILTER } from "./actionTypes";

export const filter = (filterBy) => {
  return { type: UPDATE_FILTER, payload: filterBy };
};
