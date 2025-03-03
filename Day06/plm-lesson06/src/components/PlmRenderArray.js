import React from "react";

export default function PlmRenderArray() {
    const plmNumber = [10, 20, 30, 40, 50];
    const plmElement = plmNumber.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <div className="alert alert-success">
            <ul>
                {plmElement}
            </ul>
        </div>
    );
}