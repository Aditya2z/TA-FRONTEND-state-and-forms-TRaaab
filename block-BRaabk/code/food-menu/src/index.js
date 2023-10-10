import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import data from "./data.json";
import App from "./components/App";

var root = createRoot(document.getElementById("root"));
root.render(<App data= {data} />);
