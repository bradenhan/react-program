import React, { Component } from 'react';
import './less/App.less';  

import Router from './Router';  

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Router />
      </div>
    );
  }
}

export default App;
