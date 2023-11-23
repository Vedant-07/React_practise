import React from "react";
import ReactDOM from "react-dom/client";

import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  errorRoute,
} from "react-router-dom";
import Head from "./Commons/Head";
import Footer from "./Commons/Footer";
import Body from "./Components/Body";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Welcome from "./Components/Welcome";
/*
          errorElement: Handles general or global errors across all routes in your application, acting as a fallback for any unhandled errors.
errorRoute: Specifically handles errors occurring within a defined route, providing an alternative route or component to render when an error occurs in that particular route.
          */
//this errorRoute is kind of specific
//errorRoute:<ErrorPage/>
const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

/*  const appRouter = createBrowserRouter([
    {
      path:'',
      element:(
      <>
      <Head/>
      <Outlet/>
      <Footer/>
      </>
      ),
      children:[
        {
          path:'',
          element:<Welcome/>
        },
        {
          path:'body',
          element:<Body/>
        },
        {
          path:'/contact',
          element:<Contact/>,
         
        }
      ],
      errorElement:<ErrorPage/>
    }
  ]) */

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <ErrorPage />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
/**
 * <Main Page>
 * Header
 *  logo
 *  eat-out
 *  contact us
 *  items in cart
 *  sign in
 * Body-container
 *  search
 *  rest-container
 *      rest. card
 *          img
 *          name of rest.
 *          ratings
 *          cuisines
 *          place
 * Footer
 *  various links
 *  Copyright
 *  addresses
 *
 *
 *
 * <rest-card-page>
 *  rest-items
 *  add to cart
 *
 *
 * <payments>
 *
 */
