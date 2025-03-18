import React, { useState } from "react";
import axios from "axios";

export default function PlmCreateMockApi() {
  // Khởi tạo state
  const [plmFullName, setPlmFullName] = useState("");
  const [plmAge, setPlmAge] = useState(0);
  const [plmActive, setPlmActive] = useState(true);

  // API POST
  const PlmCreateUser =
    "https://67d92df000348dd3e2aa0151.mockapi.io/K23CNT3_PhamLeManh/plm_users";

  // Xử lý tạo user
  const handleCreateUser = (ev) => {
    ev.preventDefault(); // Ngăn form reload trang

    const newUser = {
      plmFullName,
      plmAge: Number(plmAge), // Chuyển age thành số
      Active: plmActive, // Fix lỗi API field
    };

    console.log("Dữ liệu gửi lên API:", newUser);

    axios
      .post(PlmCreateUser, newUser)
      .then(() => {
        alert("Thêm mới thành công!");
        // Xóa form sau khi thêm thành công
        setPlmFullName("");
        setPlmAge(0);
        setPlmActive(true);
      })
      .catch((error) => {
        console.error("Lỗi khi thêm user:", error);
      });
  };

  return (
    <div className="alert alert-info">
      <h2>➕ Thêm Mới User</h2>
      <hr />
      <form onSubmit={handleCreateUser}>
        <div className="mb-3">
          <label htmlFor="plmFullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="plmFullName"
            value={plmFullName}
            onChange={(ev) => setPlmFullName(ev.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="plmAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="plmAge"
            value={plmAge}
            onChange={(ev) => setPlmAge(ev.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Active</label>
          <div>
            <input
              type="radio"
              name="plmActive"
              id="plmActive_hd"
              value="true"
              checked={plmActive === true}
              onChange={() => setPlmActive(true)}
            />
            <label htmlFor="plmActive_hd" className="mx-2">
              Hoạt Động
            </label>

            <input
              type="radio"
              name="plmActive"
              id="plmActive_kh"
              value="false"
              checked={plmActive === false}
              onChange={() => setPlmActive(false)}
            />
            <label htmlFor="plmActive_kh" className="mx-2">
              Khóa
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          ➕ Create
        </button>
      </form>
    </div>
  );
}
