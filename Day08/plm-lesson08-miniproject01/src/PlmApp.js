import React, { Component } from "react";
import PlmControl from "./components/PlmControl";
import PlmStudentList from "./components/PLmStudentList";
import PlmForm from "./components/PlmForm";

class PlmApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plmStudents: [
        { plmID: "SV001", plmStudentName: "Pham Le Manh", plmAge: 20, plmGender: "Nam", plmBirthday: "07/02/2005", plmBirthPlace: "HaNoi", plmAddress: "28A LeTrongTan" },
        { plmID: "SV002", plmStudentName: "Pham Le Nu", plmAge: 20, plmGender: "Nữ", plmBirthday: "07/02/2006", plmBirthPlace: "HaNoi", plmAddress: "29A LeTrongTan" }
      ],
      plmStudent: {}
    };
  }



  // Hàm xử lý sự kiện xem
  plmHandleView = (plmStudent) => {
    this.setState({
      plmStudent: plmStudent,
    });
  };

  // Hàm xử lý sự kiện sửa
  plmHandleEdit = (updatedStudent) => {
    const updatedStudents = this.state.plmStudents.map((student) =>
      student.plmID === updatedStudent.plmID ? updatedStudent : student
    );

    this.setState({
      plmStudents: updatedStudents,
      plmStudent: updatedStudent, // Cập nhật form với thông tin đã chỉnh sửa
    });
  };

  // Hàm xử lý sự kiện xóa
  plmHandleDelete = (plmID) => {
    const filteredStudents = this.state.plmStudents.filter((student) => student.plmID !== plmID);
    this.setState({
      plmStudents: filteredStudents,
      plmStudent: {}, // Xóa thì clear form
    });
  };

  render() {
    return (
      <div>
        <h1>Quản lý sinh viên</h1>
        <hr />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <PlmControl renderPlmStudent={this.state.plmStudent} />
              <PlmStudentList
                renderPlmStudents={this.state.plmStudents}
                onplmHandleView={this.plmHandleView}
                onplmHandleEdit={this.plmHandleEdit}
                onplmHandleDelete={this.plmHandleDelete}
              />
            </div>
          </div>

          <div className="col-5 grid-margin">
            <PlmForm renderPlmStudent={this.state.plmStudent} onplmHandleEdit={this.plmHandleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlmApp;
