import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Services() {
    return (
        <div>
            <Container style={{marginTop: 30}}>
                <Row style={{marginBottom:30}}>
                    <Col xs={12}>
                        <h1>Our Services</h1>
                        <p>Our team has extensive experience in consulting services, 
                            teaching and training, and executing complex health-related projects 
                            from a phase of conceptualization to its completion 
                            by thorough vetting of each phase of a project.</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={12} md={3}>
                        <h2>Monitoring &amp; Evaluation</h2>
                        <p className="services">Monitoring and Evaluation (M &amp; E) is a process that helps improve performance 
                            and achieve desired goals and objectives through improvement in outputs, 
                            outcomes, and impact. Our members are adept in developing M &amp; E framework 
                            including key performance indicators to help improve project/program 
                            performance and attain results. </p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h2>Teaching and Training</h2>
                        <p className="services">Our team is adept is several statistical softwares, such as SPSS, SAS, JMP and R, 
                            and have trained professionals and students in quality data collection, 
                            management and analysis. </p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h2>Project Implementation</h2>
                        <p className="services">Thorough planning and trained team members are key for a successful project. 
                            We have a lot of experience in health-related projects 
                            from a phase of conceptualization, planning, implementation and completion. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
