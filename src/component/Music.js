import React from 'react';
import ReactDOM from 'react-dom';
import './Music.css';

class Music extends React.Component{

  render(){

    return(
      <div className="Music">
        <h5 class="music-description">
          Music is a somewhat recent hobby of mine, but I'm as passionate about it as any other hobby I've had. Inspired to express myself and further my technical expertise, I've been making music for close to 2 years and have released 2 EPs and a single. And as much as I love creating music, I also love to perform it. Performing at open mic nights, charity concerts, and house parties in Dallas, San Antonio, and College Station have created some of my greatest memories. Below are some of my favorite songs that I've released. Enjoy!
        </h5>

        <iframe class="sc-song" width="75%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647254758&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        <iframe class="sc-song" width="75%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572892612&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        <iframe class="sc-song" width="75%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/626670804&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        <iframe width="1020" height="630" src="https://www.youtube.com/embed/c2t8IHZiwNk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Music;
