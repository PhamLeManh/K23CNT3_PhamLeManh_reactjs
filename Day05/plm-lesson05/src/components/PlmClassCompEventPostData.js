import React, { Component } from "react"; // Fixed import — using Component, not Comment!

class PlmClassCompEventPostData extends Component { // Fixed "Comment" typo
    constructor(props) {
        super(props);
    }

    // Hàm xử lý sự kiện
    plmEventHandleClick = () => {
        // Chuyển dữ liệu lên App thông qua props
        this.props.onPlmDataToApp("Dữ liệu từ component con - PlmClassCompEventPostData");
    };

    render() {
        return (
            <div className="alert alert-success">
                <button className="btn btn-primary" onClick={this.plmEventHandleClick}>
                    Button1 - Chuyển dữ liệu lên App
                </button>
            </div>
        );
    }
}

export default PlmClassCompEventPostData;
