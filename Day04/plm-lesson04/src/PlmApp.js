import PlmFunComp from "./Components/PlmFunComp";
import PlmFunComp1 from "./Components/PlmFunComp1";
import PlmClassComp from "./Components/PlmClassComp";



function PlmApp() {
  //Object
  const users = {
    fullname:'Pham Le Manh',
    age:20,
    phone:"0799079636"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - state</h1>
      <hr/>
      <div class className='alert alert-danger'>
        <PlmFunComp name="Pham Le Manh" address="HaNoi" company="NTU" note="ManhDepZai"/>
        <hr/>
        <PlmFunComp name="Do Tung Duong" address="HaNoi" company="NTU" note="DuongBeDe"/>
      </div>
      <div className="alert alert-info">
      <PlmFunComp1 renderInfo={users} />


      </div>
      <PlmClassComp/>   
      {/* chuyen du lieu tu PLmApp -> xuong PlmClassComp*/}
      <PlmClassComp name="k23cnt3" renderUsers={users}/>

     
    </div>
  );
}

export default PlmApp;
