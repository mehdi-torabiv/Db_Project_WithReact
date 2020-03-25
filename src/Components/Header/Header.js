import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import HeaderContactIcon from './HeaderContactIcon/HeaderContactIcon';
import "../Header/Header.css";
class Header extends Component {
    render() {
        return (
            <header className="">
                <div className="mb-5 myNavCl">
                    <HeaderContactIcon />
                    <Navbar />

                </div>
            </header>
        );
    }
}

export default Header;
