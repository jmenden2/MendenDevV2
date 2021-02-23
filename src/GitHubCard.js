import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class GitHubCard extends React.Component {


    render() {
        
        let list =this.props.repos.map(function(item) {
            return(
                <React.Fragment >

                <Card className="text-center" style={{width: '18rem' ,marginTop:"5px"}}>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary" href={item.html_url}>Go to the Repo on GitHub</Button>
                    </Card.Body>
                </Card>
                </React.Fragment>

            );
        });
        
        return list
    }

}

export default GitHubCard;