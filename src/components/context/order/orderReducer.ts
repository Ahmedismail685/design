import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartView } from "../constant";
import { cart, shirt } from "../shirt";

const initialState: cart = cartView;

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    show(state, { payload }: PayloadAction<{ state: "view" | "cart" }>) {
      if (payload.state === "view") {
        state.open.openView = !state.open.openView;
      } else {
        state.open.openCart = true;
        state.open.openView = false;
      }
    },
    addOrder(state, { payload }: PayloadAction<shirt>) {
      let item = state.items.filter((i) => i.id === payload.id)[0];
      if (item !== undefined) {
        const newItem = { ...item, ...payload };
        newItem.quantity = item.quantity + payload.quantity;
        newItem.total = item.price * newItem.quantity;
        state.items[state.items.indexOf(item)] = newItem;
        state.summary.subtotal += newItem.total!;
        state.summary.total += newItem.total!;
      } else {
        payload.total = payload.price * payload.quantity;
        state.items.push(payload);
        state.summary.subtotal += payload.total!;
        state.summary.total += payload.total!;
      }
    },
    changeQuantity(state, { payload }: PayloadAction<{ id: string; value?: number }>) {
      let { id, value } = payload;
      const item = state.items.filter((i) => i.id === id)[0];

      if (value === undefined) {
        value = 1;
        item.quantity += value;
      } else if (value === -1) {
        item.quantity -= 1;
      } else if (value <= 0) {
        state.summary.subtotal -= item.price * item.quantity;
        state.summary.total -= item.price * item.quantity;
        item.quantity = 0;
      } else {
        state.summary.subtotal -= item.price * item.quantity;
        state.summary.total -= item.price * item.quantity;
        item.quantity = value;
      }
      item.total! = item.price * item.quantity;
      state.summary.subtotal += item.price * value;
      state.summary.total += item.price * value;

      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== item.id);
      }
    },
  },
});

export const OrderActions = slice.actions;
export default slice.reducer;
