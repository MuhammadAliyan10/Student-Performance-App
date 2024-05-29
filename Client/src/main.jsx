import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StudentContext from "./Context/StudentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StudentContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StudentContext>
);
