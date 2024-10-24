import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({
    requestStatusReviews: "idle",
  }),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectRequestStatusReviews: (state) => state.requestStatusReviews,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatusReviews = "pending";
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatusReviews = "fulfilled";
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatusReviews = "rejected";
      }),
});

export const {
  selectReviewsIds,
  selectReviewById,
  selectRequestStatusReviews,
} = reviewsSlice.selectors;
