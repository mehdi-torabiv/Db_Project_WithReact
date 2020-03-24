import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Cards.css"
const Cards = (props) => {
    return (
        <Card className="CardIntroduce">
            <Card.Img variant="top" src={props.children} />
            <Card.Body className="cardTitleName">
                <Card.Title className="text-center text-black-50 fontCardSize">{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Cards;
