import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
          <Toaster position={"top-right"}/>
      </BrowserRouter>
  </React.StrictMode>
);
