import React, { Component } from 'react';

import './App.css';

import Message from './Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message message='Hi there' />
      </div>
    );
  }
}

export default App;
