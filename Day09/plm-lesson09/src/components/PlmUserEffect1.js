import React, { useEffect } from 'react';

export default function PlmUserEffect1() {
    useEffect(() => {
        console.log("useEffect (callback)");
    }, []); // Thêm dependency array để useEffect chỉ chạy 1 lần khi component mount

    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className='alert alert-danger'>
            <h1>useEffect</h1>
            <hr/>
            <button onClick={handleClick}>Click </button>
        </div>
    );
}
