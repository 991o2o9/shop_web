import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { About } from "../../pages/About/About";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import { path } from "../../utils/constants/constants";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: path.home,
        element: <HomePage />,
      },
      {
        path: path.about,
        element: <About />,
      },
      {
        path: path.productPage,
        element: <ProductPage />,
      },
    ],
  },
]);
