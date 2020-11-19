import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutUs() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={4}>
                    About Us
                </Col>
                <Col sm={12} md={8}>
                    Mission
                </Col>
                <Col sm={12} md={8}>
                    Vision
                </Col>
                <Col sm={12} md={8}>
                    Values
                </Col>
            </Row>
        </Container>
    )
}
