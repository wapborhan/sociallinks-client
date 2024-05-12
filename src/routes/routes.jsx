import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Root from "../layout/Root";
import ProfileLayout from "../layout/ProfileLayout";
import Repositories from "../pages/profile/repo/Repositories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: "Under Constraction",
      },
      {
        path: "ranks",
        element: "Under Constraction",
      },
      {
        path: "liked-profile",
        element: "Under Constraction",
      },
    ],
  },
  {
    path: "/",
    element: <ProfileLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "repo",
        element: <Repositories />,
      },
    ],
  },
]);
