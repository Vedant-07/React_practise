import React from 'react'
import ReactDOM  from 'react-dom/client'
import Body from './Body'
import Footer from './Footer'
import Head from './Head'

const App = () => {
  return (
    <>
    <Head/>
    <Body/>
    <Footer/>
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
 *          name
 *          ratings
 *          kms/min away from you
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