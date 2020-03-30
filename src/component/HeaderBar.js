import React from 'react';
import ReactDOM from 'react-dom';
import './HeaderBar.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class HeaderBar extends React.Component{

  render(){

    const igLink = "https://www.instagram.com/j.triangle/";
    const githubLink = "https://github.com/jakerdou";
    const linkedInLink = "https://www.linkedin.com/in/james-robinson-6832b4152/" ;

    return(
      <div className="HeaderBar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand class="myName">James Robinson</Navbar.Brand>
        <Nav className="links">
          <Nav.Link href={igLink} target="_blank">Instagram</Nav.Link>
          <Nav.Link href={githubLink} target="_blank">Github</Nav.Link>
          <Nav.Link href={linkedInLink} target="_blank">LinkedIn</Nav.Link>
        </Nav>
      </Navbar>
      </div>
    )
  }
}

export default HeaderBar;
