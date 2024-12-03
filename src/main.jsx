import { createRoot } from "react-dom/client";
import "./app/styles/global.scss";
import "./app/styles/normalize.scss";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/routes/Router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
