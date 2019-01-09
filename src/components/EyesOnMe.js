import React, { Component } from "react";

class EyesOnMe extends Component {
  //
  render() {
    return (
      <div>
        <button
          onFocus={() => console.log("Good!")}
          onBlur={() => console.log("Hey! Eyes on me!")}
        >
          This is a Button
        </button>
      </div>
    );
  }
}

export default EyesOnMe;
