import React, { Component } from 'react';
import SectionOne from './SectionOne/SectionOne';
import Carousels from "./Carousels/Carousels";

class Main extends Component {
    render() {
        return (
            <div className="">
                <Carousels />
                <SectionOne />
            </div>
        );
    }
}

export default Main;
