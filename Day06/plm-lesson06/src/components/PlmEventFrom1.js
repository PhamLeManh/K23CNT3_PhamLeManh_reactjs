import React, { Component } from 'react';

class PlmEventFrom1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmStudentName: "PhamLeManh",
        };
    }

    // Ham su ly su kien tren textbox
    plmHandleChange = (event) => {
        // cap nhat lai state
        this.setState({
            plmStudentName: event.target.value,
        });
    };

    // khi submit form, lay du lieu va hien thi
    plmHandleSubmit = (ev) => {
        ev.preventDefault(); // Prevent the default form submission
        alert('Xin chao ' + this.state.plmStudentName);
    };

    render() {
        return (
            <div className="alert alert-info">
                <h2>Form Input</h2>
                <form onSubmit={this.plmHandleSubmit}>
                    <label htmlFor="plmStudentName">Student Name:</label>
                    <input
                        type="text"
                        name="plmStudentName"
                        id="plmStudentName"
                        className="form-control"
                        value={this.state.plmStudentName}
                        onChange={this.plmHandleChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2">
                        Click Here
                    </button>
                </form>
            </div>
        );
    }
}

export default PlmEventFrom1;   