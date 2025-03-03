import React, { Component } from "react";

class PlmLesson07Btap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmStudents: [
                { plmId: 1, plmName: "PhamLeManh", plmAge: 20 },
                { plmId: 2, plmName: "PhamLeManhh", plmAge: 200 },
                { plmId: 3, plmName: "PhamLeManhhh", plmAge: 2000 },
                { plmId: 4, plmName: "PhamLeManhhhh", plmAge: 20000 },
            ],
            plmProducts: [
                { plmProductId: "PlmP001", plmProductName: "PlmIPhone 11", plmQuantity: 15, plmPrice: 1000 },
                { plmProductId: "PlmP002", plmProductName: "PlmIPhone 12", plmQuantity: 20, plmPrice: 1250 },
                { plmProductId: "PlmP003", plmProductName: "PlmIPhone 13", plmQuantity: 10, plmPrice: 1500 },
                { plmProductId: "PlmP004", plmProductName: "PlmIPhone 14", plmQuantity: 15, plmPrice: 2000 },
            ],
        };
    }

    render() {
        // hien thi du lieu
        const { plmStudents, plmProducts } = this.state;
        const plmElement = plmStudents.map((plmItem) => {
            return (
                <li key={plmItem.plmId}>
                    {plmItem.plmId} - {plmItem.plmName} - Age: {plmItem.plmAge}
                </li>
            );
        });

        const plmRenderElement = plmStudents.map((plmItem, index) => {
            return (
                <tr key={plmItem.plmId}>
                    <td>{plmItem.plmId}</td>
                    <td>{plmItem.plmName}</td>
                    <td>{plmItem.plmAge}</td>
                    <td>
                        <button className="btn btn-danger mx-1">xoa</button>
                        <button className="btn btn-success mx-1">sua</button>
                    </td>
                </tr>
            );
        });

        const plmProductElement = plmProducts.map((plmProduct) => {
            return (
                <tr key={plmProduct.plmProductId}>
                    <td>{plmProduct.plmProductId}</td>
                    <td>{plmProduct.plmProductName}</td>
                    <td>{plmProduct.plmQuantity}</td>
                    <td>{plmProduct.plmPrice}</td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Student List</h2>
                <ul>
                    {plmElement}
                </ul>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>PLmID</th>
                            <th>PlmName</th>
                            <th>PlmAge</th>
                            <th>PlmAction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plmRenderElement}
                    </tbody>
                </table>

                <h2>Product List</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plmProductElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlmLesson07Btap;
