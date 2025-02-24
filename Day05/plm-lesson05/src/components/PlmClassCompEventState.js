import React, { Component } from "react"; // Make sure Component is imported

class PlmClassCompEventState extends Component { // Make sure this is a class
    constructor(props) {
        super(props);
        this.state = {
            plmFullName: "Pham Le Manh",
            plmAge: 45,
        };
    }

    // Event handler
    plmEventHandleClick1 = () => {
        alert("Full Name: " + this.state.plmFullName + "\nAge: " + this.state.plmAge);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.plmEventHandleClick1}>
                    Button1 - Dữ liệu trong state
                </button>
            </div>
        );
    }
}

export default PlmClassCompEventState; // Make sure it's exported like this
