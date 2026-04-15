import { createBrowserRouter } from "react-router";
import Homepage from '../pages/homepages/Homepage';
import Friends from '../pages/friends/Friends';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage/>, 
      },
      {
        path: "/friends",
        element: <Friends />,
      }

    ]
  },
]);