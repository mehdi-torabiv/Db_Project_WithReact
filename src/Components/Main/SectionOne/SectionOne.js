import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import "./SectionOne.css";
import Cards from "./Cards/Cards";
import card1 from "../../../assets/c1.jpg";
import card2 from "../../../assets/c2.jpg";
import card3 from "../../../assets/c3.jpg";
import card4 from "../../../assets/c4.jpg";
const SectionOne = (props) => {
    return (
        <Container fluid>
            <Row className="myMain mt-4 py-5">
                <Col md={{ span: 9, offset: 1 }}>
                    <div className="d-flex justify-content-between">
                        <h5>
                            <i className="fa fa-film ml-2"></i>
                            آخرین فیلم های روز ایران</h5>
                        <Button className="d-inline ButtonHome ml-2">
                            فیلم های بیشتر
                        <i className=" mr-2 fa fa-chevron-left"></i>
                        </Button>
                    </div>
                    <p className="d-flex justify-content-start mr-4 text-muted text-black-50">فیلم های روی پرده سینما در این هفته ...</p>
                    <div className="d-flex mb-2">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                </Col>
                <Col className="mt-4" md={{ span: 9, offset: 1 }}>
                    <div className="d-flex justify-content-between">
                        <h5>
                            <i className="fa fa-film ml-2"></i>
                            آخرین فیلم های روز ایران</h5>
                        <Button className="d-inline ButtonHome ml-2">
                            فیلم های بیشتر
                        <i className=" mr-2 fa fa-chevron-left"></i>
                        </Button>
                    </div>
                    <p className="d-flex justify-content-start mr-4 text-muted text-black-50">فیلم های روی پرده سینما در این هفته ...</p>
                    <div className="d-flex mb-2">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                </Col>
                <Col className="mt-4" md={{ span: 9, offset: 1 }}>
                    <div className="d-flex justify-content-between">
                        <h5>
                            <i className="fa fa-film ml-2"></i>
                            آخرین فیلم های روز ایران</h5>
                        <Button className="d-inline ButtonHome ml-2">
                            فیلم های بیشتر
                        <i className=" mr-2 fa fa-chevron-left"></i>
                        </Button>
                    </div>
                    <p className="d-flex justify-content-start mr-4 text-muted text-black-50">فیلم های روی پرده سینما در این هفته ...</p>
                    <div className="d-flex mb-2">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="دوئت">{card3}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                        <Cards name="اولین امضا برای رعنا">{card4}</Cards>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionOne;
