import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

class AboutMe extends React.Component {
    render() {
        return (

            <Container className="about-me-container vertical-center" >
                <Row className="align-items-center">
                    <Col style={{paddingLeft:"25px"}}>
                        <h1 className="primary-text" >about me:</h1>
                        <p className="secondary-text">currently, i'm a software developer at General Mills. living and working in Minneapolis, MN!</p>
                        <p className="secondary-text">currently, i'm a software developer at General Mills. living and working in Minneapolis, MN!</p>
                        <p className="secondary-text">currently, i'm a software developer at General Mills. living and working in Minneapolis, MN!</p>
                        <p className="secondary-text">currently, i'm a software developer at General Mills. living and working in Minneapolis, MN!</p>
                        <p className="secondary-text">currently, i'm a software developer at General Mills. living and working in Minneapolis, MN!</p>
                    </Col>
                    <Col>
                        <Image src="wheaties.JPG" rounded style={{ width:"85%",height:"90%"}}/>
                    </Col>
                </Row>
            </Container>
            

        );
    }
}

export default AboutMe