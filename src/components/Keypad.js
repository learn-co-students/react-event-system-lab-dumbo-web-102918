// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleKeyUp = (event) => {
    console.log('Entering password...');
  }
  render() {
    return (<input onKeyUp={this.handleKeyUp}>

      </input>)
  }
}

export default Keypad;
