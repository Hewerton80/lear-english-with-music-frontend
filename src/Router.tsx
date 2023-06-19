import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/songs";
import Song from "./pages/song";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/song/:slug",
    element: <Song />,
  },
]);
