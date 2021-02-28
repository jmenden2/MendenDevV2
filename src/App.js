import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import GitHubCard from './GitHubCard.js'
import Skills from './Skills.js'
import AboutMe from './AboutMe.js'

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
    const tooltip = (
      <Tooltip id="tooltip">This is a picture I took while hiking Angels Landing at Zion National Park. I highly recommend the hike if you aren't scared of heights!</Tooltip>
    );
    return (
      <div className="primary-color3">
        <Navbar className="primary-color2" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        </Navbar>

        <OverlayTrigger trigger="hover" placement="bottom-start" overlay={tooltip}>
          <Image src="IMG_2322.JPG" title="Picture at Angels Landing" alt="Picture of Zion National Park near the peak of Angels Landing" fluid />
        </OverlayTrigger>
        
        <Image className="center-over-header" src="IMG_0070.JPG" fluid roundedCircle style={{width:'20vw',marginBottom:"-7.5%"}}/>
        
        <h1 className="primary-text App" style={{paddingBottom:"75px"}}>Hi, my name is {this.state.profileData.name}!</h1>

        <AboutMe/>
        
        <h2 className="primary-text">I'm a software developer based in {this.state.profileData.location}</h2>
        <h3 className="primary-text">I have {this.state.profileData.public_repos} public GitHub Repos</h3>
        <h4 className="primary-text">My Public GitHub Repos:</h4>
        
        <div className='d-flex flex-row justify-content-around m-3 flex-wrap'>
          <GitHubCard repos={this.state.repoData} />
        </div>
        <Skills />
      </div>
    );
  }
}

export default App;
