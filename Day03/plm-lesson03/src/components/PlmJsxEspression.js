import React from "react";

export default function PlmJsxExpression() {
    // Biến
    const name = "PhamLeManh";

    // Đối tượng
    const user = {
        firstName: "Pham",
        lastName: "Le"
    };

    // Hàm
    const fullName = (user) => {
        return <h2>{user.firstName} {user.lastName}</h2>;
    };

    // Element
    const element = (
        <div>
            {/* Biểu thức JSX */}
            {fullName(user)}
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    // Hàm
    const sayWelcome = (name) => {
        if (name) {
            return <h3>Welcome to {name}</h3>;
        } else {
            return <h3>Welcome to Fit - NTU - K23CNT3</h3>;
        }
    };

    return (
        <div>
            <h1>Plm - JSX Expression</h1>
            {/* Sử dụng biến element */}
            {element}
            <hr />
            {sayWelcome()}
            <hr />
            {sayWelcome("Pham Le Manh")}
        </div>
    );
}
 