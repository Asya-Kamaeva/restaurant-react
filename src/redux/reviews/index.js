import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../data/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
