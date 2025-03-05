import React, { Component } from "react";

class PlmStudent extends Component {
  constructor(props) {
    super(props);
  }

  // Hàm xử lý chức năng xem
  plmHandleView = () => {
    // Chuyển lên PlmStudentList
    this.props.onplmHandleView(this.props.student);
  };

  render() {
    // Lấy dữ liệu từ props
    const { student, index } = this.props;

    if (!student) {
      return null;
    }

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{student.plmID}</td>
        <td>{student.plmStudentName}</td>
        <td>{student.plmAge}</td>
        <td>{student.plmGender}</td>
        <td>
          <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-danger btn-icon-text" onClick={this.plmHandleView}>
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default PlmStudent;