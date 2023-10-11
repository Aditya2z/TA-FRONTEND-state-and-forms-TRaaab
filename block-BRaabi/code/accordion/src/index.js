import "./styles/style.css";
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import data from './data.json';

var root = createRoot(document.getElementById("root"));
root.render(<App data = {data} />);