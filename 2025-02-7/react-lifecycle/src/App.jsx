import React, { Component } from "react";
import Counter from "./components/Counter";
import Std from "./components/Std";
// import "./Style.css";

class MyComponent extends Component {

  constructor(){
    console.log("Constructor: When component is created");
    super();
    this.state = {  
      count: 0,  
      show: true
    } 
  }

  

  componentDidMount() {
    console.log(" componentMount: When componnt rendor for the first time");
  }

  increment(){
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log("Render: When component is rendered");
    return (
      <div className="App"> 
       <Counter number={this.state.count}>  </Counter>
        <button onClick={()=> {this.increment()}}> Click me </button>
        <br></br>
        <br></br>
        <button onClick={()=>this.setState({show:this.state.show})}>Toggle child component</button>
       {
         this.state.show ? <Std></Std> : <h1>Child component is removed from the DOM</h1>
       }
        
      </div>

      
    );
  }
}

export default MyComponent;
