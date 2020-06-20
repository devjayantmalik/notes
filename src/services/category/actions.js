import { ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY } from "./actionTypes";

export const addCategory = (category) => {
  return { type: ADD_CATEGORY, payload: category };
};

export const removeCategory = (category) => {
  return { type: REMOVE_CATEGORY, payload: category };
};

export const updateCategory = (old, updated) => {
  return { type: UPDATE_CATEGORY, payload: { old, updated } };
};
