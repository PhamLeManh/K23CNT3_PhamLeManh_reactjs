import React, { Component } from "react";
import PlmControl from "./components/PlmControl";
import PlmStudentList from "./components/PLmStudentList";
import PlmForm from "./components/PlmForm";

class PlmApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      plmStudents:[
        {plmID:"SV001",plmStudentName:"Pham Le Manh",plmAge:20,plmGender:"Nam",plmBirthday:"07/02/2005",plmBirtPlace:"HaNoi",plmAddress:"28A LeTrongTan"},
        {plmID:"SV002",plmStudentName:"Pham Le Nu",plmAge:20,plmGender:"Nu",plmBirthday:"07/02/2006",plmBirtPlace:"HaNoi",plmAddress:"29A LeTrongTan"},
        {plmID:"SV003",plmStudentName:"Pham Le Nam",plmAge:20,plmGender:"Nam",plmBirthday:"07/02/2007",plmBirtPlace:"HaNoi",plmAddress:"30A LeTrongTan"},
        {plmID:"SV004",plmStudentName:"Pham Le Namm",plmAge:20,plmGender:"Nam",plmBirthday:"07/02/20077",plmBirtPlace:"HaNoi",plmAddress:"300A LeTrongTan"},
      ],
      plmStudent:""
    }
  }
  //ham xu ly su kien view student
  plmHandleView = (plmStudent)=>{
    this.setState({
      plmStudent:plmStudent,
    })
  }
  render() {
    //log
    console.log("View Student:",this.state.plmStudent)
    return (
      <div>
        <h1>PhamLeManh-k23cnt3</h1>
        <hr/>
        <div className="row">

          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              {/*header*/}

              <PlmControl renderPlmStudent = {this.state.plmStudent}/>

              {/*danhsachsinhvien*/}

              <PlmStudentList renderPlmStudents={this.state.plmStudents} onplmHandleView={this.plmHandleView}/>

            </div>
          </div>

          <div className="col-5 grid-margin">

            {/*form*/}
            <PlmForm renderPlmStudent = {this.state.plmStudent}/>

          </div>
        </div>
      </div>
    );
  }
}

export default PlmApp;