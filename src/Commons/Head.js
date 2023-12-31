import React, { useContext } from "react";
import logo from "../../utilities/img/eat_out.png";
import { Link } from "react-router-dom";
import UserContext from "../../utilities/UserContext";
import { useSelector } from "react-redux";

const Head = () => {
  const { loggedInUser } = useContext(UserContext);
  //subscriobing to strore using selectore
  const cartItems = useSelector((store) => store.cart.items);
  // cart constains store items
  console.log(cartItems);
  return (
    <>
      <div className="flex px-4 bg-slate-900 text-white justify-between ">
        <Link to="/">
          <img src={logo} alt="eat out" className="h-16 p-3" />
        </Link>
        <div className="flex py-3 my-2  space-x-3">
          <div>
            <Link to="/body">Home</Link>{" "}
          </div>
          <div>
            <Link to="/contact"> Contact</Link>
          </div>
          <div>
            <div>Username:{loggedInUser}</div>
          </div>
          <div>Items {cartItems.length}</div>

          <div>Sign in</div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
