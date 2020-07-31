import { ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY } from "../actionTypes";
import { addCategory, removeCategory, updateCategory } from "../actions";

it("should return the expected action for adding category", () => {
  const category = { id: 1, title: "arts" };
  const expected = { type: ADD_CATEGORY, payload: category };

  expect(addCategory(category)).toStrictEqual(expected);
});

it("should return the expected action for removing category", () => {
  const category = { id: 2, title: "programming" };
  const expected = { type: REMOVE_CATEGORY, payload: category };

  expect(removeCategory(category)).toStrictEqual(expected);
});

it("should return expected action for updating category", () => {
  const old = { id: 1, title: "programming" };
  const updated = { title: "World is loving" };

  const expected = { type: UPDATE_CATEGORY, payload: { old, updated } };

  expect(updateCategory(old, updated)).toStrictEqual(expected);
});
