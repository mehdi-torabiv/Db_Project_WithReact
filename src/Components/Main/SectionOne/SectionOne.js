import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import "./SectionOne.css";
const SectionOne = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
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
                </Col>
            </Row>
        </Container>
    );
}

export default SectionOne;
