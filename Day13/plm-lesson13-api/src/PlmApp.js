import React from "react";
import PlmReactApiLocal from "./components/PlmReactApiLocal";
import PlmReactMockApi from "./components/PlmReactMockApi";
import PlmCreateMockApi from "./components/PlmCreateMockApi";

export default function PlmApp() {
  return (
    <div className="container border my-3 p-3">
      <h1 className="text-center text-primary">🚀 ReactJS - API - PhamLeManh</h1>
      <hr />

      <div className="mb-4">
        <h2 className="text-success">📌 Đọc dữ liệu từ API Local</h2>
        <PlmReactApiLocal />
      </div>

      <hr className="my-4 border-danger" />

      <div className="mb-4">
        <h2 className="text-danger">📌 Đọc dữ liệu từ MockAPI (mockapi.io)</h2>
        <PlmReactMockApi />
        <hr/>
        <PlmCreateMockApi/>
      </div>
    </div>
  );
}
