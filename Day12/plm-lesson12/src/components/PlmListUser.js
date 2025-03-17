import React from "react";

export default function PlmListUser({ renderPlmUsers }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">📋 Danh Sách Tài Khoản</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered text-center shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Họ và Tên</th>
              <th>Tên Đăng Nhập</th>
              <th>Mật Khẩu</th>
            </tr>
          </thead>
          <tbody>
            {renderPlmUsers.map((user, index) => (
              <tr key={user.id} className="align-middle">
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.plmFullName}</td> {/* Sửa lại key đúng chuẩn */}
                <td>{user.plmUserName}</td>
                <td>
                  <span className="badge bg-secondary">••••••••</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
