import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const redirectTo = sessionStorage.redirectTo;
delete sessionStorage.redirectTo;

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/rentalcar">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

if (redirectTo) {
  window.location.replace(redirectTo);
}
