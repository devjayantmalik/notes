export const _update = (arr, old, updated) => {
  const filtered = arr.filter((note) => note.id !== old.id);
  return [...filtered, { ...old, ...updated }];
};
