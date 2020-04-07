import React from 'react';
import ReactDOM from 'react-dom';
import './ContentTabs.css';
import AboutMe from './AboutMe.js';
import Music from './Music.js';
import CodingProjects from './CodingProjects.js';
import Podcast from './Podcast.js'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'

class ContentTabs extends React.Component{

  render(){

    return(
      <div className="ContentTabs">
        <Tabs variant="pills">
          <Tab eventKey="abtMe" title="About Me">
            <AboutMe />
          </Tab>
          <Tab eventKey="music" title="Music">
            <Music />
          </Tab>
          <Tab eventKey="coding" title="Coding Projects">
            <CodingProjects />
          </Tab>
          <Tab eventKey="podcast" title="Podcast">
            <Podcast />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ContentTabs;
