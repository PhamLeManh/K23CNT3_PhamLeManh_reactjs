import React, { Component } from "react";
import PlmLoginControl from "./PlmLoginControl";

class PlmRenderCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    // ham xu ly su kien login
    plmHandleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    plmHandleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div className="alert alert-danger">
                <h2>Render Condition</h2>
                <hr/>
                <PlmLoginControl isLoggedIn={isLoggedIn} />
                <hr/>
                {
                    isLoggedIn 
                        ? <button onClick={this.plmHandleLogout}>Logout</button> 
                        : <button onClick={this.plmHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default PlmRenderCondition;