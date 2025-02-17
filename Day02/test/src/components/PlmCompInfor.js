import React, { Component } from "react";
import PropTypes from "prop-types";

class plmCompInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorName: "Pham Le Manh",
        };
    }

    render() {
        const { fullName, studentId, birthDate, phone, className, address } = this.props;
        const { creatorName } = this.state;

        return (
            <div style={styles.container}>
                <h2>Thông Tin Sinh Viên</h2>
                <p><strong>Họ và Tên:</strong> {fullName}</p>
                <p><strong>Mã Sinh Viên:</strong> {studentId}</p>
                <p><strong>Ngày Sinh:</strong> {birthDate}</p>
                <p><strong>Số Điện Thoại:</strong> {phone}</p>
                <p><strong>Lớp:</strong> {className}</p>
                <p><strong>Địa Chỉ:</strong> {address}</p>

                <h3>Thông Tin Người Tạo</h3>
                <p><strong>Người tạo component:</strong> {creatorName}</p>
            </div>
        );
    }
}

// Kiểm tra kiểu dữ liệu của props
plmCompInfor.propTypes = {
    fullName: PropTypes.string.isRequired,
    studentId: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

// CSS Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    }
};

export default plmCompInfor;