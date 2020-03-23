import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./HeaderContactIcon.css"
const HeaderContactIcon = (props) => {
    return (
        <Container fluid className="littleNav">
            <Row className="py-2">
                <Col md={{ span: 6, offset: 3 }} className="">
                    <div className="py-2">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">اخبار</a>
                                </li>
                                <li>
                                    <a href="#">دانلود</a>
                                </li>
                                <li>
                                    <a href="#">سینما تخفیف</a>
                                </li>
                                <li>
                                    <a href="#">اپ</a>
                                </li>
                                <li>
                                    <a href="#">جدول فروش</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Col>
                <Col md={3} className="mr-auto">
                    <div className="contactUs py-2">
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </span>
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </span>
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </span>
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </span>
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-telegram"></i>
                            </a>
                        </span>
                        <span className="pr-2">
                            <a href="#">
                                <i className="fa fa-whatsapp"></i>
                            </a>
                        </span>

                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default HeaderContactIcon;
