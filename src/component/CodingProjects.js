import React from 'react';
import ReactDOM from 'react-dom';
import './CodingProjects.css';

class CodingProjects extends React.Component{

  render(){

    return(
      <div className="CodingProjects">
        <h5 class="coding-description">
          As a Computer Science major, I always enjoy playing with computers and learning more about them. Recently, I've been interested in machine learning and web development. On my github you can see examples of different coding projects I've taken on.
        </h5>

        <div>
          <a href="https://github.com/jakerdou/not-pot" target="_blank"><img src="https://gh-card.dev/repos/jakerdou/not-pot.svg" /></a>
          <p class="repo-description">
            Using Not Pot, you can upload an image to this and be told if the image contains marijuana. Using the python library Tensorflow, I trained a neural network to tell if images contain marijuana. I used a Flask backend and a React frontend.&nbsp;
            <a href="https://jakerdou.github.io/not-pot" target="_blank">Visit Not Pot</a>
          </p>

          <a href="https://github.com/jakerdou/spotify-monthly-updates" target="_blank"><img src="https://gh-card.dev/repos/jakerdou/spotify-monthly-updates.svg" /></a>
          <p class="repo-description">
            I used React and Node.js to develop a web application to give monthly Spotify Statistics to users.
          </p>

          <a href="https://github.com/jakerdou/tamu-esports-discord-bot" target="_blank"><img src="https://gh-card.dev/repos/jakerdou/tamu-esports-discord-bot.svg" /></a>
          <p class="repo-description">
            I used Node.js to develop an automated user for group communication platform, Discord, so that members of TAMU Esports could be automatically updated with things like tournament dates and player rank.
          </p>
        </div>
      </div>
    )
  }
}

export default CodingProjects;
