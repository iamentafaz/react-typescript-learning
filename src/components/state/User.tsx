import React, { useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
};

const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const handleLogOut = () => {
        setUser(null);
    };
    const handleLogin = () => {
        setUser({
            name: 'Mir',
            email: 'mir@gmail.com',
        });
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User name is: {user?.name}</div>
            <div>User email is: {user?.email}</div>
        </div>
    );
};

export default User;
