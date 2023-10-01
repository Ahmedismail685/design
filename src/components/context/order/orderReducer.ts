import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { item, order } from "./order.t";
import { orders } from "../constant";

const initialState: order = {
  open: false,
  items: orders,
  subtotal: 0,
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    show(state) {
      state.open = !state.open;
    },
    addOrder(state, { payload }: PayloadAction<item>) {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) {
        item!.quantity = item!.quantity + 1;
      } else state.items.push(payload);
      state.subtotal += payload.price;
    },
    changeQuantity(state, { payload }: PayloadAction<{ id: string; sign: string }>) {
      const item = state.items.filter((i) => i.id === payload.id)[0];
      if (payload.sign === "+") {
        item.quantity = item.quantity + 1;
        state.subtotal += item.price;
      } else {
        item.quantity = item.quantity - 1;
        state.subtotal -= item.price;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const OrderActions = slice.actions;
export default slice.reducer;
