import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../src/providers/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <React.StrictMode>
          <Toaster />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
