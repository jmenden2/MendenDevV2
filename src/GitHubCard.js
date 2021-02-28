import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class GitHubCard extends React.Component {


    render() {
        
        let list =this.props.repos.map(function(item) {
            return(
                

                <Card key={item.id} className="container-fluid d-flex full-height align-items-center bg-light" style={{width: '18rem' ,marginTop:"5px"}}>
                        <Card.Body>
                            <Container style={{height:"230px"}}>
                                <Row>
                                    <Card.Title className="align-text-center">{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Row>
                            </Container>
                            
                            <Button variant="primary" href={item.html_url}>Go to the Repo on GitHub</Button>
                           
                        </Card.Body>
                    
                </Card>
                

            );
        });
        
        return list
    }

}

export default GitHubCard;