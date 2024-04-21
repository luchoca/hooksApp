import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";

//import { SimpleForm } from "./useEffect/SimpleForm";
//import { CounterApp } from "./01-UseState/CounterApp";
//import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <FormWithCustomHook />
 // </React.StrictMode>
);
