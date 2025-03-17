import React, { useState } from "react";

export default function PlmFormUser({ onPlmAddNew }) {
  const [id, setid] = useState("");
  const [plmFullName, setPlmFullName] = useState("");
  const [plmUserName, setPlmUserName] = useState("");
  const [plmPass, setPlmPass] = useState("");

  const plmHandleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id, plmFullName, plmUserName, plmPass };

    console.log("Thông tin sinh viên:", newUser);
    alert("Lưu thành công!");

    if (onPlmAddNew) {
      onPlmAddNew(newUser); // Gửi dữ liệu về component cha
    }

    // Reset form sau khi lưu
    setid("");
    setPlmFullName("");
    setPlmUserName("");
    setPlmPass("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">📋 Thông Tin Sinh Viên</h2>
      <form onSubmit={plmHandleSubmit} className="border p-4 rounded shadow bg-light">
        <div className="mb-3">
          <label className="form-label">📌 Mã Sinh Viên:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập mã sinh viên..."
            value={id}
            onChange={(e) => setid(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">🧑 Họ và Tên:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập họ và tên..."
            value={plmFullName}
            onChange={(e) => setPlmFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">👤 Tài Khoản:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tài khoản..."
            value={plmUserName}
            onChange={(e) => setPlmUserName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">🔒 Mật Khẩu:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu..."
            value={plmPass}
            onChange={(e) => setPlmPass(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          💾 Lưu
        </button>
      </form>
    </div>
  );
}
