import React from "react";

export default function PlmFunCompEvent1() {
    // Function handlers
    const plmEventButton1Click = () => {
        alert("Button 1 - Clicked");
    };

    const plmEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };

    const plmEventButton3Click = (name) => {
        alert("Name: " + name);
    };

    return (
        <div className="alert alert-info">
            <button className="btn btn-primary mx-1" onClick={plmEventButton1Click}>
                Button1
            </button>
            <button className="btn btn-success mx-1" onClick={plmEventButton2Click}>
                Button2
            </button>
            <button className="btn btn-success mx-1" onClick={() => plmEventButton3Click("PhamLeManh")}>
                Button3
            </button>
        </div>
    );
}
