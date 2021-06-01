import React from "react";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./components/context/userContext";
import App from "./App";
import "./styles/global.css";
import "./styles/modal.css";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
