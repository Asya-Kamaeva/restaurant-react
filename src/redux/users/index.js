import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
  }),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectUsersIds, selectUserById, selectRequestStatus } =
  usersSlice.selectors;
