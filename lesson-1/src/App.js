import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greeting';
import Message from './components/Message';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Message/>
        {/* <Greet name="dee"/>
        <Greet name='deo'/>
        <Greet name='aggreys'/>
        <Welcome name='test-1'/>
        <button className="btn btn-danger btn-lg p-4">Read More</button> */}
      </div>
      
    );
  }
}

export default App;
