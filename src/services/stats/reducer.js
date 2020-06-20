import * as types from "./actionTypes";

const initialState = {
  notes: 0,
  favorites: 0,
  categories: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INC_NOTES:
      return { ...state, notes: state.notes + 1 };
    case types.DEC_NOTES:
      return { ...state, notes: state.notes - 1 };
    case types.INC_CATEGORIES:
      return { ...state, categories: state.categories + 1 };
    case types.DEC_CATEGORIES:
      return { ...state, categories: state.categories - 1 };
    case types.INC_FAVORITE:
      return { ...state, favorites: state.favorites + 1 };
    case types.DEC_FAVORITE:
      return { ...state, favorities: state.favorites - 1 };
    default:
      return state;
  }
};
