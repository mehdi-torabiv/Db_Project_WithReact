import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
const SectionOne = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md={8}>
                    <div className="">
                        <h5>
                            آخرین فیلم های روز ایران</h5>
                        <Button className="d-inline">
                            فیلم های بیشتر
                        <i className=" mr-2 fa fa-chevron-left"></i>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionOne;
