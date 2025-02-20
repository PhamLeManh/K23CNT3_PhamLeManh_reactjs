import React, { Component } from "react";

class PlmClassComp extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo state
        this.state = {
            fullname: "Pham Le Manh",
            age: 20,
            phone: "0799079636"
        };
    }
    // Hàm xử lý sự kiện
    changeInfor = () => {
        // Cập nhật state
        this.setState({
            fullname: "Pham Le Manh"
        });
    }

    render() {
        let users = this.props.renderUsers;
        return (
            <div className="alert alert-success">
                <h2>Trình bày dữ liệu từ state</h2>
                <p>Full Name: {this.state.fullname}</p>
                <p>Age: {this.state.age}</p>
                <p>Phone: {this.state.phone}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.changeInfor}>Change Info</button>
                <hr/>
                <h3>Lấy dữ liệu từ props</h3>
                <p>Name: {this.props.renderName}</p>
                <p>Fullname: {users?.fullname}</p>
                <p>Age: {users?.age}</p>
                <p>Phone: {users?.phone}</p>
            </div>
        );
    }
}

export default PlmClassComp;
