import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
// import App from "./components/App.jsx";
import routes from "./components/routes/routes";
import { ItemsDataProvider } from "./components/dataContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemsDataProvider>
      <RouterProvider router={router} />
    </ItemsDataProvider>
  </StrictMode>
);
