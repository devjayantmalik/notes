import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "../actionTypes";
import { addNote, removeNote, updateNote } from "../actions";

it("should return expected action for adding note", () => {
  const note = { id: 1, title: "note 1" };
  const expected = { type: ADD_NOTE, payload: note };

  expect(addNote(note)).toStrictEqual(expected);
});

it("should return expected action for removing note", () => {
  const note = { id: 1 };
  const expected = { type: REMOVE_NOTE, payload: note };

  expect(removeNote(note)).toStrictEqual(expected);
});

it("should return expected action for updating note", () => {
  const old = { id: 1, title: "one" };
  const updated = { title: "two" };

  const expected = { type: UPDATE_NOTE, payload: { old, updated } };
  expect(updateNote(old, updated)).toStrictEqual(expected);
});
