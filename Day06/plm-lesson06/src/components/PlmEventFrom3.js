import React, { Component } from "react";

class PlmEventFrom3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmGioiTinh: 'Nam',
        };
    }

    // ham xu ly su kien change
    plmHandleChange = (event) => {
        this.setState({
            plmGioiTinh: event.target.value,
        });
    };

    // ham xu ly su kien submit
    plmHandleSubmit = (event) => {
        event.preventDefault(); // Fixed typo in method name
        alert('GioiTinhCuaBanLa: ' + this.state.plmGioiTinh);
    };

    render() {
        return (
            <div className="alert alert-success">
                <h2>Form Input - Radio</h2>
                <form onSubmit={this.plmHandleSubmit}>
                    <div>
                        <label htmlFor="plmNam">GioiTinh:</label>
                        <input
                            type="radio"
                            name="plmGioiTinh"
                            value="Nam"
                            id="plmNam"
                            className="mx-2"
                            checked={this.state.plmGioiTinh === 'Nam'}
                            onChange={this.plmHandleChange}
                        />
                        <label htmlFor="plmNam">Nam</label> &nbsp;&nbsp;&nbsp;
                        <input
                            type="radio"
                            name="plmGioiTinh"
                            value="Nu"
                            id="plmNu"
                            className="mx-2"
                            checked={this.state.plmGioiTinh === 'Nu'}
                            onChange={this.plmHandleChange}
                        />
                        <label htmlFor="plmNu">Nu</label> &nbsp;&nbsp;&nbsp;
                        <input
                            type="radio"
                            name="plmGioiTinh"
                            value="Khac"
                            id="plmKhac"
                            className="mx-2"
                            checked={this.state.plmGioiTinh === 'Khac'}
                            onChange={this.plmHandleChange}
                        />
                        <label htmlFor="plmKhac">Khac</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default PlmEventFrom3;
