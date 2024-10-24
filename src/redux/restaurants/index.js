import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurant } from "./get-restaurant";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
    requestStatusRestaurant: "idle",
  }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsRequestStatus: (state) => state.requestStatus,
    selectRestaurantRequestStatus: (state) => state.requestStatusRestaurant,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getRestaurant.pending, (state) => {
        state.requestStatusRestaurant = "pending";
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.requestStatusRestaurant = "fulfilled";
      })
      .addCase(getRestaurant.rejected, (state) => {
        state.requestStatusRestaurant = "rejected";
      }),
});

export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantsRequestStatus,
  selectRestaurantRequestStatus,
} = restaurantsSlice.selectors;
