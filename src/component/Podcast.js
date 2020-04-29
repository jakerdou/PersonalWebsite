import React from 'react';
import ReactDOM from 'react-dom';
import './Podcast.css';

class Podcast extends React.Component{

  render(){

    return(
      <div className="Podcast">
        <h5 class="pod-description">
          A and J on a Tuesday, a podcast where 2 best friends talk about random things that interest them!&nbsp;
          <a href="https://www.instagram.com/alec.shea98/" target="_blank">Alec</a>
          &nbsp;and I started this podcast to talk about whatever we wanted as well as to have dedicated time to connect and catch up. Sometimes we bring guests on the show! Here are a few of my favorite episodes.
        </h5>

        <div class="anchor-embed">
          <iframe src="https://anchor.fm/AandJonaTuesday/embed/episodes/We-are-back-ebiapq/a-ac9pbt" height="102px" width="600px" frameborder="0" scrolling="no"></iframe>
        </div>
        <p class="pod-description">
          Title: We are back! <br/> The boys are back to bring you a nice and short episode about Rick and Morty. Enjoy! <br/> Released: March 17, 2020
        </p>

        <div class="anchor-embed">
          <iframe src="https://anchor.fm/AandJonaTuesday/embed/episodes/Trip-to-the-Northeast--Happys-and-Crappys--and-Questions-with-Quence-e51pcg/a-ac9pbt" height="102px" width="600px" frameborder="0" scrolling="no"></iframe>
        </div>
        <p class="pod-description">
          Title: Trip to the Northeast, Happys and Crappys, and Questions with Quence <br/> The boys are joined by the third musketeer,&nbsp;
          <a href="https://www.instagram.com/_quence_/" target="_blank">Quence</a>
          . They discuss their trip to the Northeast and then ask each other questions. <br/> Released: August 27, 2019
        </p>

        <div class="anchor-embed">
          <iframe src="https://anchor.fm/AandJonaTuesday/embed/episodes/All-things-Japan-w-Josiah-Spencer-e4s2rn/a-ac9pbt" height="102px" width="600px" frameborder="0" scrolling="no"></iframe>
        </div>
        <p class="pod-description">
          Title: All things Japan with Josiah Spencer <br/> The boys are back together to talk about what it’s like living in Japan with their special guest&nbsp;
          <a href="https://www.instagram.com/josiah_spence21/" target="_blank">Josiah Spencer</a>
          . <br/> Released: August 6, 2019
        </p>

      </div>
    )
  }
}

export default Podcast;
