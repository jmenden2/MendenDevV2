import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';


class Skills extends React.Component {
    render() {
        return (
            <Container>
                <Row style={{ padding: '15px' }}>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>C#</h4>
                    </Col>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>SQL</h4>
                    </Col>
                </Row>
                <Row style={{ padding: '15px' }}>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>Java</h4>
                    </Col>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>C</h4>
                    </Col>
                </Row>
                <Row style={{ padding: '15px' }}>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>JS</h4>
                    </Col>
                    <Col>
                        <ProgressBar style={{ height: '50px' }}>
                            <ProgressBar className="progress-bar-fill" now={60} label={'60'} />
                            <ProgressBar className="progress-bar-no-fill" now={40} />
                        </ProgressBar>
                        <h4>React</h4>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Skills;