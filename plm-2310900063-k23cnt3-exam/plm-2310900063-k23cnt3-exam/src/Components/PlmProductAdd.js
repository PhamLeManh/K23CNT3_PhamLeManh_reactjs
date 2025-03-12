import React from 'react';

function PlmProductAdd({ onAdd }) {
  const [plmpid, setPlmPid] = React.useState('');
  const [plmpName, setPlmPName] = React.useState('');
  const [plmpQuantity, setPlmPQuantity] = React.useState(1);
  const [plmpPrice, setPlmPPrice] = React.useState(1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { plmpid, plmpName, plmpQuantity: Number(plmpQuantity), plmpPrice: Number(plmpPrice) };
    onAdd(newProduct);
    setPlmPid('');
    setPlmPName('');
    setPlmPQuantity(1);
    setPlmPPrice(1000);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Mã sinh viên" value={plmpid} onChange={(e) => setPlmPid(e.target.value)} required />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Họ tên" value={plmpName} onChange={(e) => setPlmPName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <input type="number" className="form-control" placeholder="Số lượng" value={plmpQuantity} onChange={(e) => setPlmPQuantity(e.target.value)} required />
      </div>
      <div className="mb-3">
        <input type="number" className="form-control" placeholder="Giá" value={plmpPrice} onChange={(e) => setPlmPPrice(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Thêm sinh viên</button>
    </form>
  );
}

export default PlmProductAdd;