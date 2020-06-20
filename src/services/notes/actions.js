import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./actionTypes";

export const addNote = (note) => {
  return { type: ADD_NOTE, payload: note };
};

export const removeNote = (note) => {
  return { type: REMOVE_NOTE, payload: note };
};

export const updateNote = (old, updated) => {
  return { type: UPDATE_NOTE, payload: { old, updated } };
};
