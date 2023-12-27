import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllBooks from "../pages/AllBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
        path:'',
        element: <AllBooks/>
    },
        {
        path:'/signin',
        element: <SignIn/>
    },
        {
        path:'signup',
        element: <SignUp/>
    },
]
    },
  ]);

  export default router;