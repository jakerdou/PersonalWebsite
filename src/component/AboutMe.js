import React from 'react';
import ReactDOM from 'react-dom';
import './AboutMe.css';
import appleImg from '../assets/MeAppleSmall.png'

class AboutMe extends React.Component{

  render(){

    return(
      <div className="AboutMe">

        <img src={appleImg} class="appleImg"/>

        <div class="abtMeParagraph">
          My name is James Robinson, and I am a self starting, fun loving Computer Science student at Texas A&M University that has an entrepreneurial bent. I can't wait to apply this to the jobs I hold in the future. I have held positions at Southwest Airlines, USAA, and private investment firm Catamount Capital.

          To stay focused and productive, I make time for interests outside of my school work. Content creation is a passion of mine as I have been releasing podcasts for over a year. I do this as well as write, produce, and sing my own songs.
        </div>
      </div>
    )
  }
}

export default AboutMe;
