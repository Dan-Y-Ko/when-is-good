import React, { Component } from 'react';
import TopBar from './topBar/topBar'
import Calendar from './Calendar/Calendar';
import '../SASS/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Calendar />
      </div>
    );
  }
}

export default App;
