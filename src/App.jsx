import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import MovieDetail from "./pages/MovieDetail";
import TVshows from "./pages/TVshows";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SigIn";
import User from "./pages/User";

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
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/user", element: <User /> },
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
