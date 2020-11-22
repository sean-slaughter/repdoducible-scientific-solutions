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
                    <Col xs={12} md={4}>
                        <h2>Monitoring &amp; Evaluation</h2>
                        <p className="smaller">Monitoring and Evaluation (M &amp; E) is a process that helps improve performance 
                            and achieve desired goals and objectives through improvement in outputs, 
                            outcomes, and impact. Our members are adept in developing M &amp; E framework 
                            including key performance indicators to help improve project/program 
                            performance and attain results. </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Teaching and Training</h2>
                        <p className="smaller">Our team is adept is several statistical softwares, such as SPSS, SAS, JMP and R, 
                            and have trained professionals and students in quality data collection, 
                            management and analysis. </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Project Implementation</h2>
                        <p className="smaller">Thorough planning and trained team members are key for a successful project. 
                            We have a lot of experience in health-related projects 
                            from a phase of conceptualization, planning, implementation and completion. </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={4}>
                        <h2>Survey Designs</h2>
                        <p className="smaller">Surveys are one of the important tools that comprise 
                        of measurement procedures involving asking questions from respondents.
                         Careful and thorough designing of surveys is critical for conducting good research.
                         Our team is extremely competent and has extensive experiencing in 
                         designing surveys tailored to clients needs and desired outcomes. </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Proposal/Paper Writing</h2>
                        <p className="smaller">We have extensive experience in proposal and manuscript writing.
                         Several manuscripts are published in high-impact factor peer-reviewed journals, 
                         like American Journal of Epidemiology, AIDS, and Journal of Infection. </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Disease Surveillance</h2>
                        <p className="smaller">Surveillance is ongoing and systematic collection, analysis, 
                        interpretation and dissemination of health information. 
                        Depending upon the available resources and needs, setting up a
                         disease surveillance is helpful in determining the incidence/new 
                         cases of a disease. Our team is experienced in developing disease surveillance in different settings.  </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Artificial Intelligence</h2>
                        <p className="smaller">Artificial Intelligence (AI) is development of human-like artificial 
                        intelligence that can perceive, reason, learn or process natural language. 
                        Employees and customer experiences can be enhanced by creating workflows that utilize AI and data. 
                        Our team has experience in streamlining and improving processes through in-depth use of AI. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
