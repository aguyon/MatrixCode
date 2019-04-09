import React, { Component } from "react";
import '../App.css';
import chars from "../characters/chars";

class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: this.getRandomChar
    };
  }

  getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  makeSymbolDynamic() {
    setInterval(() => {
      this.setState({ chars: this.getRandomChar });
    }, 1000);
  }

  render() {
    return (
        <div className="symbol">
            {this.state.chars}
        </div>
    )
  }
}

export default Symbol;
