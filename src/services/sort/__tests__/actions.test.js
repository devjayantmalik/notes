import { sort } from "../actions";
import { UPDATE_SORT } from "../actionTypes";

it("it should return expected payload", () => {
  const text = "date";

  const expectedAction = { type: UPDATE_SORT, payload: text };

  expect(sort(text)).toStrictEqual(expectedAction);
});
