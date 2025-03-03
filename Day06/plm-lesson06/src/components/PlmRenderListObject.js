import React, { Component } from "react";

class PlmRenderListObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plmStudents: [
                { plmId: 1, plmName: "PhamLeManh", plmAge: 20 },
                { plmId: 2, plmName: "PhamLeManhh", plmAge: 200 },
                { plmId: 3, plmName: "PhamLeManhhh", plmAge: 2000 },
                { plmId: 4, plmName: "PhamLeManhhhh", plmAge: 20000 },
            ],
        };
    }

    render() {
        // hien thi du lieu
        const { plmStudents } = this.state;
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
            </div>
        );
    }
}

export default PlmRenderListObject;