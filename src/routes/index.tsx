import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllBooks from "../pages/AllBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import PrivateRoute from "../utils/PrivateRoute";

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
        path: "book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "add-new-book",
        element:
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
      },
      {
        path: "edit-book/:id",
        element: <PrivateRoute>
          <EditBook />
        </PrivateRoute>,
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
