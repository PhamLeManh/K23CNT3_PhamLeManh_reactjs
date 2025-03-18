import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PlmReactApiLocal() {
  const [plmListUser, setPlmListUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://localhost:3001/users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((plmResponse) => {
        setPlmListUser(plmResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="text-primary">📌 Đọc dữ liệu API từ Local</h2>
      <hr />
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Full Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {plmListUser.length > 0 ? (
              plmListUser.map((plmItem, index) => (
                <tr key={plmItem.id || index}>
                  <td>{plmItem.fullname}</td>
                  <td>{plmItem.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
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
