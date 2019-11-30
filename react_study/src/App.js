import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render(){
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'red',
      fontSize: '32px'
    };
    return (
      <div style={style}>
        안녕하세요!
      </div>
    )
  }
}

export default App;
