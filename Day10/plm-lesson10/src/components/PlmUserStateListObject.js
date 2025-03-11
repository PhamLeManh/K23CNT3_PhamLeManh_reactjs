import React, { useState } from 'react';

export default function PlmUserStateListObject() {
    const listStudent = [
        { plmID: "SV001", plmName: "PhamLeManh", plmAge: 20, plmClass: "k23cnt3" }
    ];

    // Tạo state
    const [plmStudents, setPlmStudents] = useState(listStudent);

    // Hàm xóa sinh viên
    const handleDelete = (id) => {
        setPlmStudents(plmStudents.filter(student => student.plmID !== id));
    };

    // Hàm sửa thông tin sinh viên (giả sử đơn giản chỉ đổi tên)
    const handleEdit = (id) => {
        const newName = prompt("Nhập tên mới:");
        setPlmStudents(plmStudents.map(student => 
            student.plmID === id ? { ...student, plmName: newName } : student
        ));
    };

    return (
        <div>
            <h2>Danh Sách Sinh Viên</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Lớp</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {plmStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.plmID}</td>
                            <td>{student.plmName}</td>
                            <td>{student.plmAge}</td>
                            <td>{student.plmClass}</td>
                            <td>
                                <button onClick={() => handleEdit(student.plmID)}>Sửa</button>
                                <button onClick={() => handleDelete(student.plmID)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
