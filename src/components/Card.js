import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/33479836?v=4" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <a><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                <a><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                <i class="fa-brands fa-linkedin"></i>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;