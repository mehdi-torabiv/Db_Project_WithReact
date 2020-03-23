import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import HeaderContactIcon from './HeaderContactIcon/HeaderContactIcon';
class Header extends Component {
    render() {
        return (
            <nav>
                <HeaderContactIcon />
                <Navbar />
            </nav>
        );
    }
}

export default Header;
