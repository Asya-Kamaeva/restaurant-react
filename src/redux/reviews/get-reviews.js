import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from ".";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectReviewsIds(getState()).length === 0;
    },
  },
);
