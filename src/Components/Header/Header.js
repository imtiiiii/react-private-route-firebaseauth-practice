import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const { userInfo, handleLogout } = useAuth();
    return (
        <div className="header mb-5">
            <div className="header-nav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                {
                    userInfo?.email && <button className="btn-outline-primary btn mb-3" onClick={handleLogout}>{userInfo.displayName} Logout</button>
                }
            </div>

        </div>
    );
};

export default Header;