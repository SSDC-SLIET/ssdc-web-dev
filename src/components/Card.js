import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './style.css'
import {SiLinkedin} from 'react-icons/si'
import {MdOutlineEmail} from 'react-icons/md'

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
                <SiLinkedin /><MdOutlineEmail />
            </Card.Body>
        </Card>
    );
}

export default BasicExample;