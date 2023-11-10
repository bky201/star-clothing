// export const selectCategoriesMap = (state) => {
//     const categoriesMap = state.categories.categories.reduce(
//       (acc, { title, items }) => {
//         acc[title.toLowerCase()] = items;
//         return acc;
//       },
//       {}
//     );
//     return categoriesMap;
//   };

import { createSelector } from 'reselect';

const selectCategoriesState = state => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoriesState],
  categoriesState => {
    const categoriesMap = categoriesState.categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    );
    return categoriesMap;
  }
);