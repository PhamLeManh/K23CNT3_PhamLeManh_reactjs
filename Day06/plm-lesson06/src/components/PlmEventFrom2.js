import React, { Component } from "react";

class PlmEventFrom2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmCourse: 'CSS3',
        };
    }

    // ham xu ly su kien khi thay doi
    plmHandleChange = (event) => {
        // cap nhat lai state
        this.setState({
            plmCourse: event.target.value,
        });
    };

    // ham xu ly su kien khi submit form
    plmHandleSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        alert('KhoaHocBanChon: ' + this.state.plmCourse);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <h2>Form Select</h2>
                <form onSubmit={this.plmHandleSubmit}>
                    <label htmlFor="plmCourse">
                        <select
                            name="plmCourse"
                            id="plmCourse"
                            value={this.state.plmCourse}
                            onChange={this.plmHandleChange}
                            className="form-select"
                        >
                            <option value="HTML5">HTML5</option>
                            <option value="CSS3">CSS3</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Jquery">Jquery</option>
                            <option value="Bootstrap">Bootstrap</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit" className="btn btn-primary mt-2">
                        Click Here
                    </button>
                </form>
            </div>
        );
    }
}

export default PlmEventFrom2;
