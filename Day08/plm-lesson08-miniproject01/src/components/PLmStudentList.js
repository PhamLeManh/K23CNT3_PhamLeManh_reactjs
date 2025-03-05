import React, { Component } from "react";
import PlmStudent from "./PlmStudent";

class PlmStudentList extends Component {
  constructor(props) {
    super(props);
  }

  // Hàm xử lý sự kiện xem
  plmHandleView = (plmStudent) => {
    // Chuyển dữ liệu lên PlmApp
    this.props.onplmHandleView(plmStudent);
  };

  render() {
    // Lấy dữ liệu từ props
    let { renderPlmStudents } = this.props;
    console.log("List:", renderPlmStudents);

    // Chuyển dữ liệu vào PlmStudent để hiển thị
    let plmElementStudent = renderPlmStudents.map((plmItem, index) => {
      return <PlmStudent key={index} student={plmItem} index={index} onplmHandleView={this.plmHandleView} />;
    });

    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Danh sách sinh viên</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>{plmElementStudent}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PlmStudentList;