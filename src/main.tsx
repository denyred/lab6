import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { FavoriteMovies } from "./components/FavoriteMovies/FavoriteMovies";
import { Routes } from "./utils.ts/utils";
import { Shows } from "./components/Shows/Shows";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
  },
  {
    path: Routes.FAVORITES,
    element: <FavoriteMovies />,
  },
  {
    path: Routes.SHOWS,
    element: <Shows />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
