import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import HeaderContactIcon from './HeaderContactIcon/HeaderContactIcon';
import Carousels from "../Main/Carousels/Carousels";
class Header extends Component {
    render() {
        return (
            <header>
                <HeaderContactIcon />
                <Navbar />
                <Carousels />
            </header>
        );
    }
}

export default Header;
