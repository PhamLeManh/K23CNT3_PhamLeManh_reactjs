function PlmProductList({ students }) {
    return (
      <div className="card mt-4">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center">Danh sách sinh viên</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Mã sinh viên</th>
                <th>Họ tên</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.plmpid}>
                  <td>{student.plmpid}</td>
                  <td>{student.plmpName}</td>
                  <td>{student.plmpQuantity}</td>
                  <td>{student.plmpPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default PlmProductList;