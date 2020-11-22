import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

export default function MonitoringEvaluation() {
    return (
        <div>
           <Container style={{marginTop: 50}}>
           <Row>
                <Col className="about-col-right" sm={12} md={4}> 
                
                    <h1>Monitoring &amp; Evaluation</h1> 
                    <br/>
                    <p>
                        <b>Monitoring:</b>
                        <br/>
                         <p className="smaller">Keeping track of what you are doing while you are doing it, so that you can take corrective action, if necessary.
                        <br/></p>
                        <br/>
                        <b>Evaluation:</b> 
                        <br/>
                        <p className="smaller">Finding out if you have achieved the effect on your target population that you said you would achieve,
                        after you have finished implementing the activities</p>
                    </p>
                    <h1 style={{marginTop: 50}}>Logic Model</h1>
                    <Image src="/LogicModel.webp" fluid/>
                    <b>Inputs:</b> 
                        <br/>
                        <p className="smaller">The financial, human, and material resources used for developing, deploying and managing the intervention</p>
                    <b>Activities:</b> 
                    <br/>
                    <p className="smaller">Actions taken or work performed to meet the objectives</p>
                    <b>Outputs:</b> 
                        <br/>
                        <p className="smaller">The products that result from intervention</p>
                    <b>Outcomes:</b> 
                    <br/>
                    <p className="smaller">The results of the program or changes that occur either immediately or some time after activities are completed</p>
                    <b>Impact:</b> 
                        <br/>
                     <p className="smaller">The wider effect of the program on long-term consequences</p>


                </Col>
                <Col className="about-col"sm={12} md={8}>
                    <Row className="align-items-center justify-content-center">
                        <Col className="about-col"sm={12}>
                            <h1>Monitoring &amp; Evaluation Steps</h1> 
                            <br/>
                            <p>
                                <Image className="d-block mx-auto img-fluid w-50" style={{minWidth: 300}} src="/monitoringevaluation.webp" fluid/>
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="about-col"sm={12}>
                           <h1> Presentations</h1>
                            <br/>
                            <Row className="d-block mx-auto w-50">
                                <Col xs={12}>
                                <Button className="me-button" href="https://150f716c-2597-47c4-b267-f8914e49bec0.filesusr.com/ugd/a6f5ed_9659abae5f834339ad659b16fed79e5c.pdf">M &amp; E Framework</Button>
                                </Col>
                                <Col xs={12}>
                                <Button  className="me-button" href="https://150f716c-2597-47c4-b267-f8914e49bec0.filesusr.com/ugd/a6f5ed_50493217d084460e9712c6f82087f9f5.pdf">Powering Potential M &amp; E</Button>
                                </Col>
                                <Col xs={12}>
                                <Button className="me-button"  href="https://150f716c-2597-47c4-b267-f8914e49bec0.filesusr.com/ugd/a6f5ed_b6cb1ffad7be4cb0bdb8a298259c2a0d.pdf">What Might an Evaluation Look Like?</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-col"sm={12}>
                            <h1> Resources</h1>
                            <br/>
                            <Row className="d-block mx-auto w-50">
                                <Col xs={12}>
                                <Button  className="me-button" href="https://150f716c-2597-47c4-b267-f8914e49bec0.filesusr.com/ugd/a6f5ed_6ea09973abe54de0b82624828d1b8d2c.pdf">M &amp; E Framework Resources</Button>
                                </Col>
                                <Col xs={12}>
                                <Button  className="me-button" href="https://150f716c-2597-47c4-b267-f8914e49bec0.filesusr.com/ugd/a6f5ed_ea6584a974f6470bb92e62b966737c27.pdf">M &amp; E Worksheet</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
           </Container>
        </div>
    )
}
