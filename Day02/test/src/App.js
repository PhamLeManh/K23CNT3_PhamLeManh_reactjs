
import PlmCompInfor from './components/PlmCompInfor';
import './App.css';

function App() {
  const plmData = {
    fullName: "Pham Le Manh",
    studentId: "2310900063",
    birthDate: "07/02/2005",
    phone: "0799079636",
    className: "CNTT - K23",
    address: "Hanoi"
};

return (
    <div>
        <h1>Ứng Dụng Quản Lý Thông Tin</h1>
        <PlmCompInfor {...plmData} />
    </div>
);
}

export default App;
