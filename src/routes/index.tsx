import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllBooks from "../pages/AllBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "add-new-book",
        element: <AddNewBook />,
      },

      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
