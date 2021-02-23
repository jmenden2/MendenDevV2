import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';
import GitHubCard from './GitHubCard.js'

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

class App extends React.Component {
  
  state = {
    profileData: [],
    repoData: [],
  };

  

  async componentDidMount() {
    await fetch('https://api.github.com/users/jmenden2')
      .then(res => res.json())
      .then(json => {
        this.setState({ profileData: json })}
        );
    
    await fetch('https://api.github.com/users/jmenden2/repos')
      .then(res => res.json())
      .then(json => {this.setState({repoData: json});
      })
  }

  render() {
    const gitHold = {name: "class_schedule",
      description: "testing card description",
      url: "https://github.com/jmenden2/class_schedule"}
    
    return (

      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        </Navbar>
        
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-25"
                  src="/mke.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25"
                  src="/mke.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-25"
                  src="/mke.png"
                  alt="Third slide"
                />
              
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        
        
        <h1>Hi, my name is {this.state.profileData.name}!</h1>
        <h2>I have {this.state.profileData.public_repos} public GitHub Repos</h2>
        <h3>I'm a software developer based in {this.state.profileData.location}</h3>
        <Button variant="danger">Test</Button>
        <h4>My Public GitHub Repos:</h4>
        <div className='d-flex flex-row justify-content-around m-3 flex-wrap'>
          <GitHubCard repos={this.state.repoData} />
        </div>
      </div>
    );
  }
}

export default App;
