import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  Outlet,
  Link,
  RouterProvider,
  errorRoute,
  errorElement,
} from "react-router-dom";
import Head from "./Commons/Head";
import Footer from "./Commons/Footer";
import Body from "./Components/Body";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Welcome from "./Components/Welcome";
import RestMenu from "./Components/RestMenu";
import UserContext from "../utilities/UserContext";

import { Suspense, lazy } from "react";

const About = React.lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("default user");
  useEffect(() => {
    /* setTimeout(() => {
      setUserName("Vedant");
    }, 3000); */
    setUserName("Vedant");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="flex flex-col h-screen">
        <Head />
        {console.log(RestMenu)}
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
      {
        path: "/restmenu/:resId/",
        element: <RestMenu />,
      },
      {
        path: "/about",

        element: (
          <Suspense
            fallback="<div> Its about us loaging by Lazy....................................................
          sddsdassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          sadsdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          saddddddddddddddddddddddddddddddd
          adssadddddddddddddddddddddddddddddddddddddddddd
          dsdssaddddddddddddddddddadsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd
          sda </div>"
          >
            <About />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
];

const appRouter = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
