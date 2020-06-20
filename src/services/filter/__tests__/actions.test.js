import { filter } from "../actions";
import { UPDATE_FILTER } from "../actionTypes";

it("should return expected payload", () => {
  const text = "today";

  const expected = { type: UPDATE_FILTER, payload: text };

  expect(filter(text)).toStrictEqual(expected);
});
