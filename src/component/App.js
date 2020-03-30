import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ContentTabs from './ContentTabs'

class App extends React.Component{
    render(){
        return(
            <div className="App">
              HEADER BAR
              <ContentTabs />
            </div>
        )
    }
}

export default App;
