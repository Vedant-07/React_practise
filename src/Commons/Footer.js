import React, { useContext } from "react";
import UserContext from "../../utilities/UserContext";

const Footer = () => {
  let { loggedInUser } = useContext(UserContext);
  return (
    <div className="  mt-auto bg-gray-900 text-white py-4 px-5 flex space-x-32  ">
      <div className="">
        <ul>
          support Links?
          <li>here 1</li>
          <li>here 2</li>
        </ul>
      </div>
      <div className="">
        <ul>
          other things
          <li>here 1</li>
          <li>here 2</li>
        </ul>
      </div>
      <div className="">
        <ul>
          still other support Links?
          <li>here 1</li>
          <li>here 2</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
