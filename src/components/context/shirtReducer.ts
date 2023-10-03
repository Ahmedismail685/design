import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { items } from "./constant";
import { shirtProps } from "./shirt";

const initialState: { shirt: Array<shirtProps> } = {
  shirt: items,
};

const slice = createSlice({
  name: "shirt",
  initialState,
  reducers: {
    addFavorite(state, { payload }: PayloadAction<string>) {
      const item = state.shirt.filter((i) => i.id === payload)[0];
      item.Favorite = !item.Favorite;
    },
  },
});

export const ShirtActions = slice.actions;
export default slice.reducer;
