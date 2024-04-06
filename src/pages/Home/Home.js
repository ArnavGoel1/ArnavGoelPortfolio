import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";

import "./Home.css";

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row className="align-items-center">
                    <Col xs={12} md={3} lg={2} className="text-center text-md-left">
                        <img src={homeConfig.photo} alt="Profile" className="profile-photo"/>
                    </Col>
                    <Col xs={12} md={9} lg={10}>
                        <div className="greeting" style={{ fontSize: '2.5em' }}> 
                            {homeConfig.greeting}
                        </div>
                        <div className="titles-container">
                            <DynamicTyping titles={homeConfig.titles}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <About about={homeConfig.about}/>
                        <div className="d-flex justify-content-center mt-3 align-items-center">
                            {/* Include the resume icon next to the button */}
                            {homeConfig.resume.icon}
                            <Button variant="primary" href={homeConfig.resume.link} target="_blank" className="resume-download-button ml-2">Resume</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="resume-content" id="resume">
                <div className="col-md-8 mx-auto">
                    {/* Adjust Timeline component to render descriptions as bullet points */}
                    <Timeline items={homeConfig.workTimeline}/>
                </div>
            </Container>
        </section>
    );
}

export default Home;
