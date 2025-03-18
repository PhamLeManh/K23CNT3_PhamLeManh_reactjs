import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PlmReactMockApi() {
  // Khởi tạo state
  const [plmListUser, setPlmListUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // API
  const plmApiOnline =
    "https://67d92df000348dd3e2aa0151.mockapi.io/K23CNT3_PhamLeManh/plm_users";

  // Đọc dữ liệu từ API bằng Axios
  useEffect(() => {
    axios
      .get(plmApiOnline)
      .then((plmResponse) => {
        setPlmListUser(plmResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi phát sinh:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="text-danger">📌 Danh Sách Người Dùng</h2>
      <hr />
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table className="table table-bordered border-dark text-center">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>Age</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plmListUser.length > 0 ? (
              plmListUser.map((plmItem) => (
                <tr key={plmItem.plmId}>
                  <td>{plmItem.plmId}</td>
                  <td>{plmItem.plmFullName}</td>
                  <td>{plmItem.plmAge}</td>
                  <td>{plmItem.Active ? "✅" : "❌"}</td>
                  <td>
                    <button className="btn btn-warning btn-sm mx-1">Sửa</button>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
