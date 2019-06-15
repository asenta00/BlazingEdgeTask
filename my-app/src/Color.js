import React, { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = {
      randomColor: "",
      listOfRandomColors: [],
      userInput: "Default"
    };
  }
  changeColor() {
    fetch("http://www.colr.org/json/color/random")
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          randomColor: data.colors[0].hex,
          listOfRandomColors: [
            ...prevState.listOfRandomColors,
            data.colors[0].hex
          ]
        }));
      });
  }
  onUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={event => this.onUserInput(event)} />
        <hr />
        <button onClick={() => this.changeColor()}>
          Change Color of Component
        </button>
        <hr />
        <div style={{ color: "#" + this.state.randomColor }}>
          {this.state.userInput}
        </div>
        <hr />
        {this.state.listOfRandomColors.map(item => (
          <li style={{ backgroundColor: "#" + item }}>#{item}</li>
        ))}
      </div>
    );
  }
}

export default Color;
