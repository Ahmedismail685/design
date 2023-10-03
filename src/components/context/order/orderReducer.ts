import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cart, item } from "./order";
import { items } from "../constant";

const initialState: cart = {
  open: {
    openView: false,
    openCart: false,
  },
  items: items,
  summary: {
    subtotal: 0,
    deliver: 0,
    country: "",
    total: 0,
  },
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    show(state, { payload }: PayloadAction<{ state: "view" | "cart" }>) {
      if (payload.state === "view") state.open.openView = !state.open.openView;
      else state.open.openCart = !state.open.openCart;
    },
    addOrder(state, { payload }: PayloadAction<item>) {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) {
        item!.quantity = item!.quantity + 1;
      } else state.items.push(payload);
      state.summary.subtotal += payload.price;
      state.summary.total += state.summary.subtotal;
    },
    changeQuantity(state, { payload }: PayloadAction<{ id: string; sign: string; value: number }>) {
      const { id, sign, value } = payload;
      const item = state.items.filter((i) => i.id === id)[0];
      if (sign === "+") {
        item.quantity = item.quantity + value;
        state.summary.subtotal += item.price * value;
        state.summary.total += state.summary.subtotal;
      } else {
        item.quantity = item.quantity - value;
        state.summary.subtotal -= item.price * value;
        state.summary.total -= state.summary.subtotal;

        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const OrderActions = slice.actions;
export default slice.reducer;
