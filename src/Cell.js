import React, { Component } from "react";

const chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
]


class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { char: this.getRandomChar() };
    }

    getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    /*makeSymbolDynamic() {
        setInterval(() => {
            this.setState({ char: this.getRandomChar() });
        }, 1000);
    }

     componentWillMount() {
         if (this.props.primary || Math.random() > .95) {
            this.makeSymbolDynamic();
         }
     }*/



    render() {
        return (
            <div>
                {this.state.char}
            </div>
        );
    }
}

export default Cell;
