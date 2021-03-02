import React from 'react';
import logo from '../images/logo.jfif';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
           <img src={logo} alt=""/> 
        </div>
    );
};

export default Header;