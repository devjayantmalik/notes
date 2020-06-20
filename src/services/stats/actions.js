import * as types from "./actionTypes";

export const incNotes = () => ({ type: types.INC_NOTES });
export const decNotes = () => ({ type: types.DEC_NOTES });

export const incCategories = () => ({ type: types.INC_CATEGORIES });
export const decCategories = () => ({ type: types.DEC_CATEGORIES });

export const incFavorite = () => ({ type: types.INC_FAVORITE });
export const decFavorite = () => ({ type: types.DEC_FAVORITE });
