import React from 'react'
import { Col, Container, Image, Row, } from 'react-bootstrap'

export default function AboutUs() {
    return (
       
        <Container style={{marginTop: 50}}>
            <Row className="justify-content-center">
                <Col className="about-col-right" sm={12} md={4}> 
                
                    <h1>About Us</h1> 
                    <br/>
                    <p>
                    Reproducible Scientific Solutions LLC has extensive expertise in research, program implementation, 
                    and monitoring and evaluation in the field of health sciences and education. 
                    Using innovative and modern epidemiologic and statistical techniques, 
                    Reproducible Scientific Solutions is dedicated to provide data-driven results/solutions to complex problems in health sciences and education. 
                    </p>
                    <Image src="/bill_photo.jpg" fluid/>
                </Col>
                <Col className="about-col"sm={12} md={8}>
                    <Row>
                        <Col className="about-col"sm={12}>
                            <h1>Mission</h1> 
                            <br/>
                            <p>
                            To provide technical assistance to under-served communities and developing countries in Monitoring and Evaluation (M&amp;E).
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-col"sm={12}>
                           <h1> Vision</h1>
                            <br/>
                            <p>
                            Our vision is to invest in the population’s health using translational 
                            research and evidence-based strategies to alleviate health and education disparities worldwide.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-col"sm={12}>
                            <h1> Values</h1>
                            <br/>
                            <p>
                            Reproducible Scientific Solutions LLC values ethics, 
                            integrity, and accountability and appreciates the diversity 
                            and differences among communities.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}
