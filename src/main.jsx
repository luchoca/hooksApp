import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


import { FocusScreen } from "./04-useRef/FocusScreen";

//import { SimpleForm } from "./useEffect/SimpleForm";
//import { CounterApp } from "./01-UseState/CounterApp";
//import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <FocusScreen />
  // </React.StrictMode>
);
