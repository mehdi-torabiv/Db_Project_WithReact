import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
    return (
        <Container fluid className="footerS pt-4 pb-5">
            <Row className="">
                <Col sm={4} className="ml-auto text-right">
                    <h2>
                        <i className="fa fa-film ml-1"></i>
                    سینما تیکت
                    </h2>
                    <p className="mr-1 text-muted">خرید بلیط سینما با سینما تیکت</p>
                </Col>
                <Col sm={4} className="ml-auto text-right">
                    <h2>آدرس:</h2>
                    <p className="text-muted">خیابان دکتر شریعتی پایین تر از پل صدر بن بست آفتاب پلاک</p>
                </Col>
                <Col sm={4} className="ml-auto text-right">
                    <h2>دانلود اپ موبایل</h2>
                    <p className="text-muted">بزودی...</p>
                </Col>
            </Row>
            <hr></hr>
            <Row className="mt-0">
                <Col sm={9} className="ml-auto py-2">
                    <p className="d-flex justify-content-start">سینما های معروف</p>
                    <div className="d-flex justify-content-start">
                        <Button className="ml-2 footerBtn" >سیتی سنتر</Button>
                        <Button className="ml-2 footerBtn" >سینما کوروش</Button>
                        <Button className="ml-2 footerBtn" >سینما آزادی</Button>
                        <Button className="ml-2 footerBtn" >سینما آستارا</Button>
                        <Button className="ml-2 footerBtn" >سینما سپاهان</Button>
                        <Button className="ml-2 footerBtn" >سینما ملت</Button>
                        <Button className="ml-2 footerBtn" >سینما مگامال</Button>
                        <Button className="ml-2 footerBtn" >سینما زندگی</Button>
                    </div>
                    <div className="mt-2 d-flex justify-content-start">
                        <Button className="ml-2 footerBtn" >سیتی سنتر</Button>
                        <Button className="ml-2 footerBtn" >سینما کوروش</Button>
                        <Button className="ml-2 footerBtn" >سینما آزادی</Button>
                        <Button className="ml-2 footerBtn" >سینما آستارا</Button>
                        <Button className="ml-2 footerBtn" >سینما سپاهان</Button>
                        <Button className="ml-2 footerBtn" >سینما ملت</Button>
                        <Button className="ml-2 footerBtn" >سینما مگامال</Button>
                        <Button className="ml-2 footerBtn" >سینما زندگی</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
