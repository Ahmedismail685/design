import { configureStore } from "@reduxjs/toolkit";
import shirtReducer from "./shirtReducer";
import orderReducer from "./order/orderReducer";
// ...

export const store = configureStore({
  reducer: { shirt: shirtReducer, order: orderReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
