import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createStore } from "redux";
// подключаем allReducer (это наши combinedReducers), который содержит все редьюсеры.
import allReducer from "./reducers";
//подлючаем Provider длч того чтобы весь проект мог использовать store.
import { Provider } from "react-redux";
import App from "./App.tsx";

const store = createStore(allReducer); //создание главного стора, который содержит все редьюсеры.

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
