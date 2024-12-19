import React from "react";
import Sidebar from "../components/sidebar";
import Button from '@mui/material/Button';
import Topbar from "../components/topbar";
import MessageBox from "../components/messagebox";
import AttachmentBox from "../components/attachment";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "80px", width: "100%" }}>
        <Topbar />
        <div style={{ paddingTop: "60px", display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 60px)", textAlign: "center" }}>
          <div>

            <h1 style={{color:'grey'}}>Home Page</h1>


            <h3 style={{color:'grey'}}>Hi Kim, I'm Tyce, your Sales Partner.</h3>
            <h3 style={{color:'grey'}}>I'm here to help you sell your projects.</h3>
            <br></br>
            <h4 style={{color:'grey'}}>What do you need assistance with today?</h4>
            <div style={{ marginBottom: "20px" }}>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "black",
      color: "white",
      marginRight: "10px", // Add spacing between buttons
      "&:hover": {
        backgroundColor: "#333", // Darker black for hover
      },
    }}
  >
    RFP
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "black",
      color: "white",
      marginRight: "10px", // Add spacing between buttons
      "&:hover": {
        backgroundColor: "#333", // Darker black for hover
      },
    }}
  >
    Pricing
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "black",
      color: "white",
      marginRight: "10px", // Add spacing between buttons
      "&:hover": {
        backgroundColor: "#333", // Darker black for hover
      },
    }}
  >
    Marketing
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "#333", // Darker black for hover
      },
    }}
  >
    Contract
  </Button>
</div>
            <div className="chat-container">
  <MessageBox />
  <AttachmentBox/>
</div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
