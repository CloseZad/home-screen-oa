import React from "react";
import { FaHome, FaComments } from "react-icons/fa"; // Example icons
import { Link } from "react-router-dom";
import "./topbar.css"; // Optional: Add CSS for styling
import { AiFillPlusSquare, AiFillFile, AiOutlineBarChart, AiFillSetting    } from "react-icons/ai";
//idk why, but Ant Design Icons was just the first thing i saw when looking at the react icons lists

const topbar = () => {
  return (
    <div className="topbar">
      <h1>


        {/* <li> */}
          {/* <Link to="/chat"> */}
            {/* <FaComments /> */}
            {/* /* icon for comments which looks like chat */ }
            {/* <span>Chat</span> */}
          {/* </Link> */}
        {/* </li> */}
        New Project

      </h1>
    </div>
  );
};

export default topbar;