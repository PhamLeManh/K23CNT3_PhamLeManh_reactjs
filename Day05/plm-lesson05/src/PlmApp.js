import React, { Component } from "react";
import PlmFunCompEvent1 from "./components/PlmFunCompEvent1";
import PlmClassCompEvent1 from "./components/PlmClassCompEvent1";
import PlmFunCompEventProps from "./components/PlmFunCompEventProps";
import PlmClassCompEventProps from "./components/PlmClassCompEventProps";
import PlmClassCompEventState from "./components/PlmClassCompEventState";
import PlmClassCompEventPostData from "./components/PlmClassCompEventPostData"; // Make sure this component exists!

class PlmApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmNoiDung: "Chưa có gì", // Just fixed some Vietnamese accents
        };
    }

    // Hàm xử lý dữ liệu lên Component cha
    plmHandleDataToApp = (content) => {
        this.setState({ plmNoiDung: content }); // Updating state instead of just alerting
    };

    render() {
        return (
            <div className="container border mt-3">
                <h1 className="text-center alert alert-info my-2">
                    k23cnt3 - Phạm Lê Mạnh - Event and Form
                </h1>
                <hr />

                {/* Function component - Event */}
                <div>
                    <h2>Function Component - Event</h2>
                    <PlmFunCompEvent1 />
                </div>
                <hr />

                {/* Class component - Event */}
                <div>
                    <h2>Class Component - Event</h2>
                    <PlmClassCompEvent1 />
                </div>
                <hr />

                {/* Function component - Event, Props */}
                <div>
                    <h2>Function Component - Event, Props</h2>
                    <PlmFunCompEventProps plmRenderName="Pham Le Manh" />
                </div>
                <hr />

                {/* Class component - Event, Props */}
                <div>
                    <h2>Class Component - Event, Props</h2>
                    <PlmClassCompEventProps plmRenderTitle="Pham Le Manh" />
                </div>
                <hr />

                {/* Class component - Event, State */}
                <div>
                    <h2>Class Component - Event, State</h2>
                    <PlmClassCompEventState plmRenderTitle="Pham Le Manh" />
                </div>
                <hr />

                {/* Data from Child Component */}
                <div>
                    <h1>{this.state.plmNoiDung}</h1> {/* Displaying state data */}
                    <h2>Class Component - Post Data</h2>
                    <PlmClassCompEventPostData onPlmDataToApp={this.plmHandleDataToApp} />
                </div>
            </div>
        );
    }
}

export default PlmApp;
