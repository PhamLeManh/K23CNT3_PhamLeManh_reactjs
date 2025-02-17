import PlmClassComp from "./components/PlmClassComp";
import PlmJsxExpression from "./components/PlmJsxEspression";


function PlmApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS Lesson03 - Pham Le Manh</h1>
      <PlmJsxExpression/>
      <hr />
      {/*su dung function compnents*/}
      <PlmJsxExpression/>
      {/*su dung class compnents*/}
      <PlmClassComp/>
    </div>
    
  );
}

export default PlmApp;
