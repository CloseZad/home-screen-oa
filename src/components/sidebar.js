import React from "react";
import { FaHome, FaComments } from "react-icons/fa"; // Example icons
import { Link } from "react-router-dom";
import "./sidebar.css"; // Optional: Add CSS for styling
import { AiFillPlusSquare, AiFillFile, AiOutlineBarChart, AiFillSetting    } from "react-icons/ai";
//idk why, but Ant Design Icons was just the first thing i saw when looking at the react icons lists

const sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">
            <FaHome size={50}color="black"  /> 
            {/*icon for home */}
            {/* <span>Home</span> */}
          </Link>
        </li>
        <br></br>
        <li>
          <Link to="">
          <AiFillPlusSquare size={30} color="black" />
            {/*icon for plus */}
            {/* <span>Home</span> */}
          </Link>
        </li>
        <li>
          <Link to="">
          <AiFillFile size={30} color="black" />
            {/*icon for file */}
            {/* <span>Home</span> */}
          </Link>
        </li>
        <li>
          <Link to="">
          <AiOutlineBarChart  size={30} color="black" />
            {/*icon for graph */}
            {/* <span>Home</span> */}
          </Link>
        </li>
        <li>
          <Link to="">
          <AiFillSetting  size={30} color="black" />
            {/*icon for settings */}
            {/* <span>Home</span> */}
          </Link>
        </li>

        {/* <li> */}
          {/* <Link to="/chat"> */}
            {/* <FaComments /> */}
            {/* /* icon for comments which looks like chat */ }
            {/* <span>Chat</span> */}
          {/* </Link> */}
        {/* </li> */}

      </ul>
    </div>
  );
};

export default sidebar;