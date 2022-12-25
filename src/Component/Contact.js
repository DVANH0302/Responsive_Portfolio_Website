import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Style.css";
import ContactForm from './ContactForm';
import MyContact from './MyContact'
function Contact(){
    return(
        <Container>

            <Row>
                <Col className = "my-5" sm = {4}><MyContact/></Col>
                <Col sm = {8}> <ContactForm /></Col>
                
            </Row>

        </Container>
    );
}
export default Contact