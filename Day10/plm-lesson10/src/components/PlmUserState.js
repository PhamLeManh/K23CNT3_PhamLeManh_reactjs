import React, { useState } from 'react';

export default function PlmUserState() {
    // Tạo state là count và hàm cập nhật state là setCount
    const [count, setCount] = useState(0);

    // Hàm xử lý sự kiện tăng giá trị của count
    const plmHandleUp = () => {
        setCount(count + 1);
    };

    // Hàm xử lý sự kiện giảm giá trị của count
    const plmHandleDown = () => {
        setCount(count - 1);
    };

    // Hàm reset giá trị của count về 0
    const plmHandleReset = () => {
        setCount(0);
    };

    // State là 1 list
    const danh_sach = [100, 200, 300, 400, 500];
    // Khởi tạo state
    const [list, setList] = useState(danh_sach);

    // Hàm xử lý sự kiện thêm phần tử ngẫu nhiên vào danh sách
    const plmHandleAddNewRandom = () => {
        setList(prev => [
            ...prev,
            parseInt(Math.random() * 1000)
        ]);
    };

    return (
        <div className='alert alert-info'>
            <h2>Sử Dụng useState</h2>
            <p>Count: {count}</p>
            <button onClick={plmHandleUp}>UP</button>
            <button onClick={plmHandleDown}>DOWN</button>
            <button onClick={plmHandleReset}>RESET</button>
            <div>
                <h3>List: {list.toString()}</h3>
                <button onClick={plmHandleAddNewRandom}>Add New (random)</button>
            </div>
        </div>
    );
}
