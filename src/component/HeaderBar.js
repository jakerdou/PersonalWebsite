import React from 'react';
import ReactDOM from 'react-dom';
import './HeaderBar.css';
import igLogo from '../assets/glyph-logo_May2016.png'
import githubLogo from '../assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'
import linkedInLogo from '../assets/icons8-linkedin-144.png'
import soundCloudLogo from '../assets/Soundcloud-logo-black2.png'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class HeaderBar extends React.Component{

  render(){

    // TODO: need to make IG logo highlight when hovered over
    // TODO: make logos disappear when cropped out

    const igLink = "https://www.instagram.com/j.triangle/";
    const githubLink = "https://github.com/jakerdou";
    const linkedInLink = "https://www.linkedin.com/in/james-robinson-6832b4152/";
    const soundCloudLink = "https://soundcloud.com/jtriangle"
    const whValue = 65;

    return(
      <div className="HeaderBar">
      <Navbar bg="secondary" variant="light">
        <Navbar.Brand class="myName">James Robinson</Navbar.Brand>
        <Nav>
          <Navbar.Brand class="logo" href={githubLink} target="_blank">
            <img
              src={githubLogo}
              width={whValue}
              height={whValue}
              className="d-inline-block align-top"
              alt="GitHub logo"
            />
          </Navbar.Brand>
          <Navbar.Brand class="logo" href={igLink} target="_blank">
            <img
              src={igLogo}
              width={whValue}
              height={whValue}
              className="d-inline-block align-top"
              alt="Instagram logo"
            />
          </Navbar.Brand>
          <Navbar.Brand class="logo" href={linkedInLink} target="_blank">
            <img
              src={linkedInLogo}
              width={whValue}
              height={whValue}
              className="d-inline-block align-top"
              alt="GitHub logo"
            />
          </Navbar.Brand>
          <Navbar.Brand class="logo" href={soundCloudLink} target="_blank">
            <img
              src={soundCloudLogo}
              height={whValue}
              className="d-inline-block align-top"
              alt="GitHub logo"
            />
          </Navbar.Brand>
        </Nav>
      </Navbar>
      </div>
    )
  }
}

export default HeaderBar;
