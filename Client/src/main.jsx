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
import BookMark from "./pages/BookMark/BookMark";
import MyCart from "./pages/MyCart/MyCart";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Private from "./routes/Private";
import PrivateRoute from "./routes/Private";
import MyNftEdit from "./pages/MyCart/MyNftEdit";

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
        path: "/AddPost",
        element: <AddPost></AddPost>
      },
      {
        path: "/myPost",
        element: <MyPost></MyPost>
      },
      {
        path: "/updatePost/:id",
        element: <UpdatePost></UpdatePost>
      },
      {
        path: "bookMark",
        element: <BookMark></BookMark>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path:"/myCart/updateNft/:id",
        element:<MyNftEdit></MyNftEdit>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
