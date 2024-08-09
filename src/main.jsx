import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import UseAuth from "./auth/useAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UseAuth>
        <App />
      </UseAuth>
    </Router>
  </React.StrictMode>
);
