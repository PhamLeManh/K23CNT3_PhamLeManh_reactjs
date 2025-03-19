import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PlmListUser() {
  const [users, setUsers] = useState([]);

  // Gọi API lấy danh sách user
  useEffect(() => {
    fetchUsers();
  }, []);

  // Hàm fetch danh sách người dùng
  const fetchUsers = () => {
    fetch("http://localhost:3002/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu từ API:", data); // Log dữ liệu
        setUsers(data.users || data); // Xử lý cả hai trường hợp: data là mảng hoặc data có key users
      })
      .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
  };

  // Xóa user
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
      try {
        // Gọi API xóa người dùng
        await axios.delete(`http://localhost:3002/users/${id}`);
        console.log("Xóa người dùng thành công!");
        // Cập nhật lại danh sách người dùng sau khi xóa
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
      }
    }
  };

  // Sửa user
  const handleEdit = async (id) => {
    const newFullName = prompt("Nhập tên mới:");
    if (newFullName) {
      try {
        // Gọi API cập nhật thông tin người dùng
        await axios.put(`http://localhost:3002/users/${id}`, {
          fullName: newFullName,
        });
        console.log("Cập nhật người dùng thành công!");
        // Cập nhật lại danh sách người dùng sau khi sửa
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, fullName: newFullName } : user
          )
        );
      } catch (error) {
        console.error("Lỗi khi cập nhật người dùng:", error);
      }
    }
  };

  return (
    <div className="container p-4">
      <h2 className="text-primary mb-4">Danh Sách Người Dùng</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(user.id)}
                >
                  Sửa
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}