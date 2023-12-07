import React, { useContext, useState } from "react";
import UserContext from "../../utilities/UserContext";

const Welcome = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [name, setName] = useState("");

  const changeUser = () => {
    setUserName(name);
    setName(""); // Clearing the input field after submitting
  };

  return (
    <>
      <div className="h-full bg-slate-400 flex p-4">
        <div className="my-1"> Welcome </div>

        <div className="ml-3">
          <input
            type="text"
            placeholder={loggedInUser}
            value={name} // Controlled input value from state
            className="border border-gray-400 rounded-md p-1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={changeUser}
            className="ml-1 p-1 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
