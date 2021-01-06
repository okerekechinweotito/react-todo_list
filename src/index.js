import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <h1
      style={{
        textAlign: "center",
        marginBottom: "0",
        marginTop: "0",
        color: " #575353",
      }}
    >
      Made by Okereke
      <h6>useState | useEffect | useRef</h6>
    </h1>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
