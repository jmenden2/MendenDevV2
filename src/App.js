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
import ContactMeForm from './ContactMeForm.js'


class App extends React.Component {
  
  state = {
    profileData: [],
    repoData: [],
  };


  componentDidMount() {
    this.fetchGithubData();  
  }


  async fetchGithubData() {
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
        
        <Navbar className="primary-color2 sticky-nav" variant="dark">
          <Navbar.Brand href="#home">Menden.dev</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about_me">About Me</Nav.Link>
            <Nav.Link href="#github">GitHub Repos</Nav.Link>
          </Nav>

        </Navbar>
        
        <a id="home"/>
        <OverlayTrigger trigger={["hover", "focus"]} placement="bottom-start" overlay={tooltip}>
          <Image src="IMG_2322.JPG" title="Picture at Angels Landing" alt="Picture of Zion National Park near the peak of Angels Landing" fluid />
        </OverlayTrigger>
        
        <Image className="center-over-header" src="IMG_0070.JPG" fluid roundedCircle style={{width:'20vw',marginBottom:"-7.5%"}}/>
        
        <h1 className="primary-text App" style={{paddingBottom:"75px"}}>Hi, my name is {this.state.profileData.name}!</h1>

        <a id="about_me"/>
        <AboutMe/>
        
        <h2 className="primary-text" style={{marginTop:"25px"}}>I'm a software developer based in {this.state.profileData.location}</h2>
        <h3 className="primary-text">I have {this.state.profileData.public_repos} public GitHub Repos</h3>
        <h4 className="primary-text">My Public GitHub Repos:</h4>
        

        <div className='d-flex flex-row justify-content-center flex-wrap'>
          <a id="github"/>
          <GitHubCard repos={this.state.repoData} />
        </div>
        <Skills />
        <div className='d-flex flex-row justify-content-center flex-wrap'>
          <ContactMeForm />
        </div>
      </div>
    );
  }
}

export default App;
