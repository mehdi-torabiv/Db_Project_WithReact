import React, { Component } from 'react';
import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";

class Navbar extends Component {
    render() {
        return (
            <nav className="myNav">
                <ul>
                    <div className="navbarBrand mr-4">
                        <a href="#" className="pt-2">CinemaTicket</a>
                    </div>
                    <li className="mr-5">
                        <a href="#">خانه</a>
                    </li>
                    <li>
                        <a href="#">فیلم ها</a>
                    </li>
                    <li>
                        <a href="#">سینما ها</a>
                    </li>
                    <li>
                        <a href="#">درباره ما</a>
                    </li>
                    <li>
                        <a href="#">ارتباط با ما</a>
                    </li>
                    <SearchBar className="mr-2" />
                    <li className="sign ml-auto">
                        <a href="#sign" className="px-2 ml-2">ورود</a>
                        /
                        <a href="#log" className="px-2 ml-2">عضویت</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
