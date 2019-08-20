import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component{
  constructor(){
  super();

  this.state = {
    foods: [ 100,"sushi", 200,"icecream", 300,"cheeses"]
  };
}
render(){
  let foodsToDisplay = this.state.foods.map((element, index) => {
   return <h2 key={index}>{element}</h2>;
  });
  return <div className="App">{foodsToDisplay}</div>
  
}
}

export default App;
