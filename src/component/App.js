import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HeaderBar from './HeaderBar'
import ContentTabs from './ContentTabs'

class App extends React.Component{
    render(){
        return(
            <div className="App">
              <HeaderBar />
              <ContentTabs />
            </div>
        )
    }
}

export default App;
