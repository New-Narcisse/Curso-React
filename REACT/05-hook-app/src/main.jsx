// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
// import { HooksApp } from "./HooksApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { SimpleFormWithHook } from "./02-useEffect/SimpleFormWithHook";
// import { SimpleFormWithHook } from "./02-useEffect/SimpleFormWithHook";
// import { MultipleCustumHooks } from "./03-example/MultipleCustumHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Memorize } from "./06-memo/Memorize";
// import { MemorizeHook } from "./06-memo/MemorizeHook";
// import { CallbackHook } from "./06-memo/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainApp } from "./09-useContext/MainApp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
