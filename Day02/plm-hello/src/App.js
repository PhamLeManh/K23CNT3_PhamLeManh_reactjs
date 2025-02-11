
import './App.css';
import PlmCompInfor from './components/PlmCompInfor';

function App() {
  return (
    <div className="App">
      <h1>Loi to dung</h1>
      <PlmCompInfor />
      <PlmCompInfor  plmname="Pham Le Manh" plmadd="Ha Noi"/>
    </div>
  );
}

export default App;