import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/songs";
import SongPage from "./pages/song";
import CreateSongPage from "./pages/create-song";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/song/:slug",
    element: <SongPage />,
  },
  {
    path: "/create-song",
    element: <CreateSongPage />,
  },
]);
