// =============================
//  USED IN NOTES REDUCER
// =============================
export const _update = (arr, old, updated) => {
  const filtered = arr.filter((note) => note.id !== old.id);
  return [...filtered, { ...old, ...updated }];
};

export const compare = {
  dateAsc: (a, b) => {
    return new Date(a.pub_date).getTime() > new Date(b.pub_date).getTime()
      ? true
      : false;
  },
  dateDesc: (a, b) => {
    return new Date(a.pub_date).getTime() < new Date(b.pub_date).getTime()
      ? true
      : false;
  },
  titleAscending: (a, b) => (a.title > b.title ? true : false),
  titleDescending: (a, b) => (a.title < b.title ? true : false),
};

// =====================
//    used in components
// =====================
export const SORT_OPTIONS = [
  { title: "Date - New to Old", value: "dateDesc" },
  { title: "Date - Old to New", value: "dateAsc" },
  { title: "Title - A to Z", value: "titleAscending" },
  { title: "Title - Z to A", value: "titleDescending" },
];
