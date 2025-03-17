import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlmNavNar from "./components/PlmNavNar";
import PlmHome from "./components/PlmHome";
import PlmAbout from "./components/PlmAbout";
import PlmContact from "./components/PlmContact";
import PlmListUser from "./components/PlmListUser";
import PlmFormUser from "./components/PlmFormUser";

export default function PlmApp() {
  const initialUsers = [
    { id: "SV001", plmFullName: "PhamLeManh", plmUserName: "ManhDepTrai", plmPass: "07022005" },
    { id: "SV002", plmFullName: "PhamLeManh", plmUserName: "ManhDepTrai", plmPass: "07022005" },
    { id: "SV003", plmFullName: "PhamLeManh", plmUserName: "ManhDepTrai", plmPass: "07022005" },
    { id: "SV004", plmFullName: "PhamLeManh", plmUserName: "ManhDepTrai", plmPass: "07022005" },
  ];

  const [plmUsers, setPlmUsers] = useState(initialUsers);

  // Hàm thêm người dùng mới
  const plmHandleAdd = (newUser) => {
    setPlmUsers([...plmUsers, newUser]); // Cập nhật state với user mới
    console.log("Thêm sinh viên:", newUser);
  };

  return (
    <div className="container border my-3 p-3">
      <h1>React Router Dom - Demo - PhamLeManh - K23CNT3</h1>
      <hr />
      <Router>
        <PlmNavNar />
        <Routes>
          <Route path="/" element={<PlmHome />} />
          <Route path="/about" element={<PlmAbout />} />
          <Route path="/contact" element={<PlmContact />} />
          <Route path="/list-user" element={<PlmListUser renderPlmUsers={plmUsers} />} />
          <Route path="/create-user" element={<PlmFormUser onPlmAddNew={plmHandleAdd} />} />
        </Routes>
      </Router>
    </div>
  );
}
