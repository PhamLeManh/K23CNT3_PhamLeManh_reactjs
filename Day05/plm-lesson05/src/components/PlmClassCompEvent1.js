import React, { Component } from "react";

class PlmClassCompEvent1 extends Component {
    // Event handler functions
    plmEventHandleClick1 = () => {
        alert("Button 1 clicked");
    };

    plmEventHandleClick2 = () => {
        alert("Button 2 clicked");
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary mx-1" onClick={this.plmEventHandleClick1}>
                    Button1
                </button>
                <button className="btn btn-success mx-1" onClick={this.plmEventHandleClick2}>
                    Button2
                </button>
            </div>
        );
    }
}

export default PlmClassCompEvent1;
