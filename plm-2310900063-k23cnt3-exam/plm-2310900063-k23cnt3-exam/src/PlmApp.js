import React, { Component } from 'react';
import PlmProductList from './Components/PlmProductList';
import PlmProductAdd from './Components/PlmProductAdd';

export default class PlmApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { plmpid: '2310900063', plmpName: 'Pham Le Manh', plmpQuantity: 1, plmpPrice: 1000 },
        { plmpid: 'SV002', plmpName: 'Tran Thi B', plmpQuantity: 2, plmpPrice: 2000 },
        { plmpid: 'SV003', plmpName: 'Le Van C', plmpQuantity: 3, plmpPrice: 3000 }
      ]
    };
  }

  addStudent = (newStudent) => {
    this.setState(prevState => ({
      students: [...prevState.students, newStudent]
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center text-primary">Danh Sách Sinh Viên</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <PlmProductList students={this.state.students} />
          </div>
          <div className="col-md-4">
            <PlmProductAdd onAdd={this.addStudent} />
          </div>
        </div>
      </div>
    );
  }
}
