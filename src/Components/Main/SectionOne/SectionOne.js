import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Cards from "./Cards/Cards";
import "./SectionOne.css";
import card1 from "../../../assets/c1.jpg";
import card2 from "../../../assets/c2.jpg";
const SectionOne = (props) => {
    return (
        <Container fluid>
            <Row className="mt-4 mr-4">
                <Col md={{ span: 8, offset: 1 }}>
                    <div className="d-flex justify-content-between">
                        <h5>
                            <i className="fa fa-film ml-2"></i>
                            آخرین فیلم های روز ایران</h5>
                        <Button className="d-inline ButtonHome">
                            فیلم های بیشتر
                        <i className=" mr-2 fa fa-chevron-left"></i>
                        </Button>
                    </div>
                    <p className="d-flex justify-content-start mr-4 text-muted text-black-50">فیلم های روی پرده سینما در این هفته ...</p>
                    <div className="d-flex">
                        <Cards name="عطر داغ">{card1}</Cards>
                        <Cards name="خوب،بد،جلف">{card2}</Cards>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionOne;
