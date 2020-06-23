import {
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
} from "./actionTypes";

import api from "../api";

import { compare } from "../util";

export const addNote = (note) => async (dispatch) => {
  api
    .post("/notes", note)
    .then((res) => {
      return dispatch({ type: ADD_NOTE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeNote = (id) => (dispatch) => {
  api
    .delete(`/notes/${id}`)
    .then((res) => {
      return dispatch({ type: REMOVE_NOTE, payload: id });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateNote = (id, updated) => (dispatch) => {
  api
    .patch(`/notes/${id}`, updated)
    .then((res) => {
      return dispatch({ type: UPDATE_NOTE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchNotes = (filters, sortBy, callback) => async (dispatch) => {
  // Get all the notes
  let notes = await (await api.get("/notes")).data;

  // Filter the notes if specified
  if (!!filters) {
    notes = filters.map((f) => notes.map((note) => note.category === f));
  }

  // Sort the notes if specified
  if (!!sortBy) {
    notes = notes.sort(compare[sortBy]);
  }

  if (!!callback) {
    callback();
  }

  return dispatch({ type: FETCH_NOTES, payload: notes });
};

export const fetchNote = (id, callback) => async (dispatch) => {
  try {
    // Get all the notes
    let note = await (await api.get(`/notes/${id}`)).data;
    return dispatch({ type: FETCH_NOTE, payload: note });
  } catch (err) {
    console.log(err);
  } finally {
    if (!!callback) {
      callback();
    }
  }
};
