import React from 'react';
import ReactDOM from 'react-dom';
import './AboutMe.css';
import appleImg from '../assets/MeAppleSmall.png';
import gucciImg from '../assets/IMG_3005.jpg';
import jRapImg from '../assets/jazzRap.jpeg';
import jRapImg2 from '../assets/jazzRap2.jpg';
import mnkyImg from '../assets/meandmonkey.jpg';
import quenceLAImg from '../assets/meandquenceLA.jpg';
import chaseImg from '../assets/meandchase.jpg';
import shirtImg from '../assets/mecolorfulshirt.jpg';
import hairImg from '../assets/hairuprapping.jpg';
import fArrow from '../assets/forward-arrow.png';
import bArrow from '../assets/back-arrow.png';
import Carousel from 'react-bootstrap/Carousel';

class AboutMe extends React.Component{

  render(){

    // TODO: make interval for Carousel an acceptable interval

    return(
      <div className="AboutMe">

        <Carousel
          indicators={false}
          interval={6000}
          nextIcon={<img src={fArrow} height="50"/>}
          prevIcon={<img src={bArrow} height="50"/>}>

          <Carousel.Item>
            <img src={gucciImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={mnkyImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={jRapImg2} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={appleImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={quenceLAImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={chaseImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={shirtImg} class="carouselImg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={hairImg} class="carouselImg"/>
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
