import React, { Component } from "react";

class PlmControl extends Component {
  handleAddStudent = () => {
    console.log("Add student button clicked");
    // You could call a prop function here like this.props.onAddStudent();
  };

  handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    console.log("Searching for:", searchTerm);
    // this.props.onSearch(searchTerm);
  };

  handleSort = (event) => {
    const sortValue = event.target.value;
    console.log("Sorting by:", sortValue);
    // this.props.onSort(sortValue);
  };

  render() {
    return (
      <div>
        <div className="card-header">
          <div className="row d-flex align-items-center">
            <div className="col-6 d-flex">
              <button
                type="button"
                className="btn btn-primary btn-icon-text me-3"
                onClick={this.handleAddStudent}
              >
                Thêm mới sinh viên
              </button>
              <form className="d-flex w-100" onSubmit={this.handleSearch}>
                <input
                  type="search"
                  name="search"
                  className="form-control me-3"
                  placeholder="Search Here"
                  title="Search here"
                  aria-label="Search students"
                />
                <button type="submit" className="btn btn-primary btn-icon-text">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-3">
              <select className="form-control" onChange={this.handleSort}>
                <option value="">Sắp xếp</option>
                <option value="name">Theo tên</option>
                <option value="age">Theo tuổi</option>
                <option value="gender">Theo giới tính</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlmControl;
