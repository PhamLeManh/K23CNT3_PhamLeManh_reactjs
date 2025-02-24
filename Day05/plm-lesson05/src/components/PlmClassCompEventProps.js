import React, { Component } from "react";

class PlmClassCompEventProps extends Component {
    // Event handler
    plmEventHandleClick1 = () => {
        alert("Hello... " + this.props.plmRenderTitle);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.plmEventHandleClick1}>
                    Button1
                </button>
            </div>
        );
    }
}

export default PlmClassCompEventProps; // This must be here
