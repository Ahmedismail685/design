import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./components/context/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
