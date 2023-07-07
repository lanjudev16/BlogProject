import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./pages/Home/Home/Home";
import Signup from "./pages/Signup/Signup";
import AuthProvider from "./pages/provider/AuthProvider";
import SignIn from "./pages/SignIn/SignIn";
import AddPost from "./pages/Home/Post/AddPost/AddPost";
import MyPost from "./pages/Home/Post/MyPost/MyPost";
import UpdatePost from "./pages/Home/Post/UpdatePost/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/AddPost",
        element:<AddPost></AddPost>
      },
      {
        path:"/myPost",
        element:<MyPost></MyPost>
      },
      {
        path:"/updatePost/:id",
        element:<UpdatePost></UpdatePost>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path:"/signin",
    element:<SignIn></SignIn>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
