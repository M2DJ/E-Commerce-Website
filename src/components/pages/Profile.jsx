import Login from "../Login";
import { useAuth } from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState, useEffect } from "react";

const Profile = () => {
  const {isLoggedIn} = useAuth();

  if (isLoggedIn) {
    return (
      <div className="p-3">
        <div className="flex flex-col items-center">
          <div className="w-30 h-30 flex justify-center items-center border rounded-full mb-5">
            <FaUser size={"65"} />
          </div>
          <div className="">
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 text-2xl font-semibold"
            >
              Logout
              <IoIosLogOut size={"30"} />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-3">
        <Login />
      </div>
    );
  }
};

export default Profile;
