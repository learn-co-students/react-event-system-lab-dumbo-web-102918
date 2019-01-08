// Code Keypad Component Here
import React, { Component } from 'react';

class KeyPad extends Component {

  keyUpHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div><input onKeyUp={this.keyUpHandler} type="password" /></div>
    );
  }

}

export default KeyPad;
