import { INC_NOTES, DEC_NOTES } from "../actionTypes";
import { INC_CATEGORIES, DEC_CATEGORIES } from "../actionTypes";
import { INC_FAVORITE, DEC_FAVORITE } from "../actionTypes";

import { incNotes, decNotes } from "../actions";
import { incCategories, decCategories } from "../actions";
import { incFavorite, decFavorite } from "../actions";

it("should return expected action for incrementing notes", () => {
  const expected = { type: INC_NOTES };

  expect(incNotes(expected)).toStrictEqual(expected);
});

it("should return expected action for decrementing notes", () => {
  const expected = { type: DEC_NOTES };

  expect(decNotes(expected)).toStrictEqual(expected);
});

it("should return expected action for incrementing categories", () => {
  const expected = { type: INC_CATEGORIES };

  expect(incCategories()).toStrictEqual(expected);
});

it("should return expected action for decrementing categories", () => {
  const expected = { type: DEC_CATEGORIES };

  expect(decCategories()).toStrictEqual(expected);
});

it("should return expected action for increment favorities", () => {
  const expected = { type: INC_FAVORITE };

  expect(incFavorite()).toStrictEqual(expected);
});

it("should return expected action for decrementing favorities", () => {
  const expected = { type: DEC_FAVORITE };

  expect(decFavorite()).toStrictEqual(expected);
});
