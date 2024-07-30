import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import UseAuth from "./auth/useAuth.jsx"; // Importa el componente UseAuth
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseAuth>
      <Router>
        <App />
      </Router>
    </UseAuth>
  </React.StrictMode>
);
