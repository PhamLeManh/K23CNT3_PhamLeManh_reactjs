
import React, { Component } from 'react'

export default class PlmCompInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Pham Le Manh",
        };
    }

    render() {
        return (
            <div>
                <h2>plmCompInfor</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.plmname}</p>
                <p>Address: {this.props.plmadd}</p>
            </div>
        )
    }
}