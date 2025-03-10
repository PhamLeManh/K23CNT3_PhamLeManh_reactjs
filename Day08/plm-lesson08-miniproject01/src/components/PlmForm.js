import React, { Component } from "react";

class PlmForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.renderPlmStudent };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.renderPlmStudent.plmID !== this.props.renderPlmStudent.plmID) {
      this.setState({ ...this.props.renderPlmStudent });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onplmHandleEdit(this.state);
  };

  render() {
    const { plmID, plmStudentName, plmAge, plmGender, plmBirthday, plmBirthPlace, plmAddress } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Mã sinh viên</label>
              <input type="text" className="form-control" name="plmID" value={plmID} readOnly />
            </div>
            <div className="form-group">
              <label>Tên sinh viên</label>
              <input type="text" className="form-control" name="plmStudentName" value={plmStudentName} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Tuổi</label>
              <input type="number" className="form-control" name="plmAge" value={plmAge} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Giới tính</label>
              <select className="form-control" name="plmGender" value={plmGender} onChange={this.handleChange}>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ngày sinh</label>
              <input type="text" className="form-control" name="plmBirthday" value={plmBirthday} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Nơi sinh</label>
              <input type="text" className="form-control" name="plmBirthPlace" value={plmBirthPlace} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea className="form-control" name="plmAddress" value={plmAddress} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PlmForm;
