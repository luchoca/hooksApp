import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";

//import { SimpleForm } from "./useEffect/SimpleForm";
//import { CounterApp } from "./01-UseState/CounterApp";
//import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <MultipleCustomHook />
 // </React.StrictMode>
);
