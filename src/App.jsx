import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import MovieDetail from "./pages/MovieDetail";
import TVshows from "./pages/TVshows";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/categories",
        children: [
          { index: true, element: <Categories /> },
          { path: ":id", element: <CategoryDetails /> },
        ],
      },
      { path: "/movieDetails/:id", element: <MovieDetail /> },
      { path: "/tv-shows", element: <TVshows /> },
      { path: "/movies", element: <Movies /> },
      { path: "/watch-list", element: <WatchList /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
