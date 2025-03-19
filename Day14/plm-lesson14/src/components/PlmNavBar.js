import React from "react";
import { Link } from "react-router-dom";

export default function PlmNavBar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/users">Danh Sách User</Link></li>
        <li><Link to="/add-user">Thêm Mới User</Link></li>
      </ul>
    </nav>
  );
}
