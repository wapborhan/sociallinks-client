import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ProfileLayout from "../layout/ProfileLayout";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Repositories from "../pages/repo/Repositories";

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
    path: "/profile",
    exact: true,
    element: <ProfileLayout />,
    children: [
      {
        path: ":usernames",
        exact: true,
        element: <Profile />,
      },
      {
        path: ":usernames/repos",
        exact: true,
        element: <Repositories />,
      },
      {
        path: ":usernames/followers",
        exact: true,
        element: "Coming Soon",
      },
      {
        path: ":usernames/following",
        exact: true,
        element: "Coming Soon",
      },
      {
        path: ":usernames/starred",
        exact: true,
        element: "Coming Soon",
      },
    ],
  },
]);
