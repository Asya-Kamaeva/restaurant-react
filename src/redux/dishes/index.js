import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({
    requestStatusMenu: "idle",
    requestStatusDish: "idle",
  }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectRequestStatusMenu: (state) => state.requestStatusMenu,
    selectRequestStatusDish: (state) => state.requestStatusDish,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMenu.pending, (state) => {
        state.requestStatusMenu = "pending";
      })
      .addCase(getMenu.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatusMenu = "fulfilled";
      })
      .addCase(getMenu.rejected, (state) => {
        state.requestStatusMenu = "rejected";
      })
      .addCase(getDish.pending, (state) => {
        state.requestStatusDish = "pending";
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        console.log("Menu data:", payload);
        entityAdapter.setOne(state, payload);
        state.requestStatusDish = "fulfilled";
      })
      .addCase(getDish.rejected, (state) => {
        state.requestStatusDish = "rejected";
      }),
});

export const {
  selectDishesIds,
  selectDishById,
  selectRequestStatusMenu,
  selectRequestStatusDish,
} = dishesSlice.selectors;
