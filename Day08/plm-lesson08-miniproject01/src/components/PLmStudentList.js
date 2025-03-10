import React, { Component } from "react";
import PlmStudent from "./PlmStudent";

class PlmStudentList extends Component {
  render() {
    const { renderPlmStudents, onplmHandleView, onplmHandleEdit, onplmHandleDelete } = this.props;

    return (
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
            <tbody>
              {renderPlmStudents.map((student, index) => (
                <PlmStudent
                  key={student.plmID}
                  student={student}
                  index={index}
                  onplmHandleView={onplmHandleView}
                  onplmHandleEdit={onplmHandleEdit}
                  onplmHandleDelete={onplmHandleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlmStudentList;
