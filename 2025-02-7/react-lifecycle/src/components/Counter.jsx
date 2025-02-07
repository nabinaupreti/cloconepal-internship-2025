import React, { Component } from "react";


class counter extends Component {
 
  componentDidUpdate(prevProps, prevState){
    // console.log(prevProps.number);
    // console.log(this.props.number);
    if(this.props.number !== prevProps.number){
      console.log(" Component update");
    }
  
  }

  render() {  
    return (
      <div>
         <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default counter;
