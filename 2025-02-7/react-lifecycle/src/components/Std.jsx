import React, { Component } from "react";

class Std extends Component {
    componentWillUnmount() {    
        console.log("componentWillUnmount:  component is removed from the DOM");
    }
  render() {
    return (
      <div className="App">
        <h1>Student Component!</h1>
      </div>
    );
  }
}

export default Std;
