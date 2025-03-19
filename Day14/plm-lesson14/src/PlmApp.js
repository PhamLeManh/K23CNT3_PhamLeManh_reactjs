import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlmNavBar from "./components/PlmNavBar";
import PlmHome from "./components/PlmHome";
import PlmListUser from "./components/PlmListUser";
import PlmCreateUser from "./components/PlmCreateUser";

export default function PlmApp() {
  return (
    <div className="container border my-3 p-3 bg-light">
      <h1 className="text-primary">PhamLeManh - Mini Project</h1>
      <hr className="border-primary"/>

      <Router>
        <PlmNavBar />
        <Routes>
          <Route path="/" element={<PlmHome />} />
          <Route path="/users" element={<PlmListUser />} />
          <Route path="/add-user" element={<PlmCreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}