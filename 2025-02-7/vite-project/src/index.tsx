// import { render } from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
