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

        <Image src="IMG_2322.JPG" fluid />
        <Image className="center-over-header" src="IMG_0070.JPG" fluid roundedCircle style={{width:'20vw',marginBottom:"-10%"}}/>
        <h1 >Hi, my name is {this.state.profileData.name}!</h1>
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
