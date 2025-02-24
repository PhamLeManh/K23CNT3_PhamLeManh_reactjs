import React from "react";

export default function PlmFunCompEventProps(props) {
    // Event handler function for Button 1
    const plmEventHandleButtonClick1 = () => {
        alert("Dữ liệu từ props: " + props.plmRenderName);
        console.log("Xin chào", props.plmRenderName);
    };

    // Event handler function for Button 2
    const plmEventHandleButtonClick2 = (param) => {
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click): " + props.plmRenderName);
        // Dữ liệu tham số
        console.log("==========================");
        console.log("Hello", param);
        console.log("==========================");
    };

    return (
        <div className="alert alert-danger">
            <button className="btn btn-primary mx-1" onClick={plmEventHandleButtonClick1}>
                Button1
            </button>
            <button className="btn btn-primary mx-1" onClick={() => plmEventHandleButtonClick2("Tham số của Button2")}>
                Button2
            </button>
        </div>
    );
}

