import React, { useContext } from 'react';
import { UserContext } from './UsersContext';

const Users = () => {
    const userContext = useContext(UserContext);

    const handleLogOut = () => {
        userContext.setUser(null);
    };
    const handleLogin = () => {
        userContext.setUser({
            name: 'Mir',
            email: 'email@gmail.com',
        });
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User name is: {userContext.user?.name} </div>
            <div>User email is: {userContext.user?.email} </div>
        </div>
    );
};

export default Users;
