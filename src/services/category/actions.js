import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  FETCH_CATEGORIES,
} from "./actionTypes";

import api from "../api";

export const fetchCategories = () => (dispatch) => {
  api
    .get("/categories")
    .then((res) => {
      return dispatch({ type: FETCH_CATEGORIES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCategory = (title) => (dispatch) => {
  api
    .post("/categories", title)
    .then((res) => {
      return dispatch({ type: ADD_CATEGORY, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeCategory = (id) => (dispatch) => {
  api.delete(`/categories/${id}`).then((res) => {
    return dispatch({ type: REMOVE_CATEGORY, payload: id });
  });
};

export const updateCategory = (id, updated) => (dispatch) => {
  api
    .patch(`/categories/${id}`, updated)
    .then((res) => {
      return dispatch({ type: UPDATE_CATEGORY, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
