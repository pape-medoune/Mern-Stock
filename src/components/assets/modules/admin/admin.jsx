import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/Sidebar";
import sidebar_menu from "../../../../constants/sidebar-menu";

import "./App.css";
import Orders from "./pages/Orders";
import Team from "./components/presentationTeam";

function Admin() {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route path="/" element={Team} />

            <Route path="/" element={<Team />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/locations" element={<div></div>} />
            {/* <Route path="/samastock" element={} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Admin;
