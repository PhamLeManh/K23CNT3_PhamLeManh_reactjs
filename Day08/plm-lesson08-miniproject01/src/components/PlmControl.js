import React, { Component } from "react";

class PlmControl extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <div className="row d-flex align-items-center">
            <div className="col-6 d-flex">
              <button type="button" className="btn btn-primary btn-icon-text me-3">
                Thêm mới sinh viên
              </button>
              <form className="d-flex w-100" action="#">
                <input type="search" className="form-control me-3" placeholder="Search Here" title="Search here" />
                <button className="btn btn-primary btn-icon-text">Tìm kiếm</button>
              </form>
            </div>
            <div className="col-3">
              <select className="form-control">
                <option value="">Sắp xếp</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlmControl;