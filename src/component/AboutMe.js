import React from 'react';
import ReactDOM from 'react-dom';
import './AboutMe.css';
import appleImg from '../assets/MeAppleSmall.png';
import gucciImg from '../assets/IMG_3005.jpg'
import fArrow from '../assets/forward-arrow.png';
import bArrow from '../assets/back-arrow.png';
import Carousel from 'react-bootstrap/Carousel';

class AboutMe extends React.Component{

  render(){

    return(
      <div className="AboutMe">

        <Carousel
          indicators={false}
          nextIcon={<img src={fArrow} height="50"/>}
          prevIcon={<img src={bArrow} height="50"/>}>
          <Carousel.Item>
            <img src={appleImg} class="carouselImg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={gucciImg} class="carouselImg"/>
          </Carousel.Item>
        </Carousel>

        <div class="abtMeParagraph">
          My name is James Robinson, and I am a self starting, fun loving Computer Science student at Texas A&M University that has an entrepreneurial bent. I can't wait to apply this to the jobs I hold in the future. I have held positions at Southwest Airlines, USAA, and private investment firm Catamount Capital.

          To stay focused and productive, I make time for interests outside of my school work. Content creation is a passion of mine as I have been releasing podcasts for over a year. I do this as well as write, produce, and sing my own songs.
        </div>
      </div>
    )
  }
}

export default AboutMe;
