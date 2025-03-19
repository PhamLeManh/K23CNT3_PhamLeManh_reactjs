import React, { useState } from "react";
import axios from "axios";

export default function PlmCreateUser({ onUserAdded }) {
  const [user, setUser] = useState({ fullName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const apiUrl = "http://localhost:3002/users";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(apiUrl, user);
      console.log("User added:", response.data);
      onUserAdded(); // Cập nhật danh sách user sau khi thêm
      setUser({ fullName: "", email: "", phone: "" }); // Reset form
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4 p-4 bg-light border rounded">
      <h2 className="text-primary mb-4">Thêm Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={user.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Đang thêm..." : "Thêm"}
        </button>
      </form>
    </div>
  );
}