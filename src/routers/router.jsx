import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";

import Specific from "../pages/Home/Specific/Specific";
import Moredetails from "../pages/Home/Specific/Moredetails";
import BorrowBook from "../pages/Home/Specific/BorrowBook";
import Donate from "../pages/Home/Specific/Donate";
import { BaseUrl } from "../Constant/ApiDoamin";
import AdminUploadBook from "../Dashboard/AdminUploadBook";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch(`${BaseUrl}all-books`),
      },
      {
        path: "/all-book",
        element:<PrivateRoute><Shop /></PrivateRoute> ,
        loader:()=>fetch(`${BaseUrl}all-books`),
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) => fetch(`${BaseUrl}book/${params.id}`)
      },
     
      {
        path:"/borrow",
        element:<PrivateRoute><BorrowBook></BorrowBook></PrivateRoute>,
        loader:()=>fetch(`${BaseUrl}borrow`),
      },
     
      {
        path: "/add-book",
        element: <UploadBook></UploadBook>
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/admin/dashboard/upload", element: <AdminUploadBook/> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`${BaseUrl}book/${params.id}`)
    },
    
    ],
  },
  {
    path: "/specific/:id",
    element:<PrivateRoute><Specific></Specific></PrivateRoute>,
    loader:()=>fetch(`${BaseUrl}all-books`),
  },

  {
    path: "/more-detail/:id",
    element:<PrivateRoute><Moredetails></Moredetails></PrivateRoute>,
    loader:({params})=> fetch(`${BaseUrl}more-detail/${params.id}`)  
  },


  {
    path: "/donate",
    element:<PrivateRoute><Donate></Donate></PrivateRoute>,
    loader:()=> fetch(`${BaseUrl}donate`)  
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;