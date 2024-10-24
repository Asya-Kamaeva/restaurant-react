import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";
import { selectRestaurantById } from "../restaurants";

export const getMenu = createAsyncThunk(
  "dishes/getMenu",
  async (idRestaurant, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${idRestaurant}`,
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (idRestaurant, { getState }) => {
      const restaurant = selectRestaurantById(getState(), idRestaurant);

      if (!restaurant || !restaurant.menu) {
        return true;
      }

      const { menu } = restaurant;

      for (let menuId of menu) {
        if (!selectDishById(getState(), menuId)) {
          return true;
        }
      }
      return false;
    },
  },
);
