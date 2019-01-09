// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  blurHandler = (event) => {
    console.log('Good!');
  }

  focusHadnler = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onBlur={this.blurHandler} onFocus={this.focusHadnler}>
      Hi
      </button>
    )
  }
}
export default EyesOnMe;
