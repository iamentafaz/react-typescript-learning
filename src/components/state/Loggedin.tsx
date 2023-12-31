import React, { useState } from 'react'

const Loggedin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

  return (
    <div>
        <button>Login</button>
        <button>Logout</button>
        <div>User is { isLoggedIn ? 'logged in' : 'logged out'}.</div>
    </div>
  )
}

export default Loggedin;