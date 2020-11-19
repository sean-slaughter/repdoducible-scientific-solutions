import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap'

export default function AboutUs() {
    return (
       
        <Container style={{marginTop: 50}}>
            <Row className="justify-content-center">
                <Col className="about-col" sm={12} md={4}> 
                
                    <h1>About Us</h1> 
                    <br/>
                    Ingenious Health Sciences LLC has extensive expertise in research, program implementation, and monitoring and evaluation in the field of health sciences and education. Using innovative and modern epidemiologic and statistical techniques, Ingenious Health Sciences is dedicated to provide data-driven results/solutions to complex problems in health sciences and education. 
                </Col>
                <Col className="about-col"sm={12} md={8}>
                    <Row>
                        <Col className="about-col"sm={12}>
                            <h1>Mission</h1> 
                            <br/>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ullam doloremque voluptatibus quo omnis! Enim necessitatibus, 
                            veritatis neque temporibus officia adipisci sed, molestias culpa non iste, 
                            velit itaque vel sapiente voluptates?
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-col"sm={12}>
                           <h1> Vision</h1>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Suscipit rerum accusamus blanditiis fugit delectus enim tempore, 
                            earum aperiam ipsam eos consectetur. 
                            Accusamus maxime tenetur veniam obcaecati facere, quibusdam at repellat?
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-col"sm={12}>
                            <h1> Values</h1>
                            <br/>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Suscipit aspernatur voluptas voluptates culpa molestias?
                             Excepturi quod tenetur consectetur quo, 
                             accusamus suscipit adipisci est reiciendis, 
                             vitae omnis expedita hic, nisi repudiandae.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}
