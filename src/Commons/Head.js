import React from "react";
import logo from "../../utilities/img/eat_out.png";
import { Link } from "react-router-dom";

const Head = () => {
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
          <div>Items 0</div>

          <div>Sign in</div>
        </div>
      </div>
    </>
  );
};

export default Head;
