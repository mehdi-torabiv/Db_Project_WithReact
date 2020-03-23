import React, { useState } from 'react';
import { Carousel, Row, Container } from 'react-bootstrap';
import slides1 from "../../../assets/1.jpg";
import slides2 from "../../../assets/2.jpg";
import slides3 from "../../../assets/3.jpg";
import "./Carousels.css";
const Carousels = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Row >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slides1}
                            alt="first slides"
                        >
                        </img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slides2}
                            alt="first slides"
                        >
                        </img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slides3}
                            alt="first slides"
                        >
                        </img>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}


export default Carousels;
