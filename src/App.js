import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = () => {
  const location = useLocation();

  // Check if the current route is the splash screen (e.g., '/')
  const isSplashScreen = location.pathname === "/";

  return (
    <div>
      {!isSplashScreen && (
        <nav>
          {/* <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
          </ul> */}
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

const Splash = () => (
  <div>
    <h1>Welcome to the Splash Screen</h1>
    <Link to="/home">Go to Home</Link>
  </div>
);

export default App;
