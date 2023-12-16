import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SideBar from "./components/Sidebar";
// import sidebar_menu from "./constants/sidebar-menu";

import "./App.css";
import SamaStock from "./components/samaStock";
import Team from "./components/presentationTeam";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <div className="">
        <div className="">
          <Routes>
            <Route path="*" element={<SamaStock />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/orders" element={<Orders />} />
            <Route exact path="/" element={<SamaStock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
