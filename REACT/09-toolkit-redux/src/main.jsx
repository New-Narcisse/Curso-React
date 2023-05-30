import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { TodoApp } from "./TodoApp";
// import App from "./App.jsx";
// import { PokemonApp } from "./store/PokemonApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>
);
