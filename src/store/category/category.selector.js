import { createSelector } from "reselect";

const seleceCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [seleceCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [seleceCategoryReducer],
  (categories) => categories.isLoading
);
