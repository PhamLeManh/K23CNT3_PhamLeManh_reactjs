import React, { Component } from "react";

class PlmStudent extends Component {
  plmHandleView = () => {
    this.props.onplmHandleView(this.props.student);
  };

  plmHandleEdit = () => {
    const updatedStudent = { ...this.props.student, plmStudentName: prompt("Nhập tên mới:", this.props.student.plmStudentName) };
    this.props.onplmHandleEdit(updatedStudent);
  };

  plmHandleDelete = () => {
    if (window.confirm(`Bạn có chắc muốn xóa sinh viên ${this.props.student.plmStudentName}?`)) {
      this.props.onplmHandleDelete(this.props.student.plmID);
    }
  };

  render() {
    const { student, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{student.plmID}</td>
        <td>{student.plmStudentName}</td>
        <td>{student.plmAge}</td>
        <td>{student.plmGender}</td>
        <td>
          <button className="btn btn-info" onClick={this.plmHandleView}>Xem</button>
          <button className="btn btn-warning" onClick={this.plmHandleEdit}>Sửa</button>
          <button className="btn btn-danger" onClick={this.plmHandleDelete}>Xóa</button>
        </td>
      </tr>
    );
  }
}

export default PlmStudent;
