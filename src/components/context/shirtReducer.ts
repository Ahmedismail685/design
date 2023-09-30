import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { items } from "./constant";
import { shirt } from "./shirt";

const initialState: { shirt: Array<shirt>; inView: { id: string; index: number; show: boolean } } = {
  shirt: items,
  inView: {
    id: "",
    index: 0,
    show: false,
  },
};

const slice = createSlice({
  name: "shirt",
  initialState,
  reducers: {
    view(state, { payload }: PayloadAction<string>) {
      const item = state.shirt.filter((s) => s.id === payload)[0];

      if (state.inView.show) {
        state.inView.show = false;
      } else {
        state.inView = { id: item.id, index: state.shirt.indexOf(item), show: true };
      }
    },
    changeView(state, { payload }: PayloadAction<string>) {
      const index = state.inView?.index;

      if (payload === "+") {
        if (index + 1 >= state.shirt.length) return;
        state.inView!.index = state.inView!.index + 1;
      } else {
        if (index < 1) return;
        state.inView!.index = state.inView!.index - 1;
      }
      state.inView!.id = state.shirt[state.inView!.index].id;
    },
  },
});

export const ShirtActions = slice.actions;
export default slice.reducer;
