import React from 'react'
import ReactDOM  from 'react-dom/client'

import {Link,Outlet,createBrowserRouter,RouterProvider} from "react-router-dom"
import Head from './Head'
import Footer from './Footer'
import Body from './Body'
const App = () => {
  const router = createBrowserRouter([
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
          path:'body',
          element:<Body/>
        }
      ]
    }
  ])


  return (
    <>
    {/* <Head/>
    <Body/>
    <Footer/> */}
    <RouterProvider router={router}/>
    </>
  )
  
}
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

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)