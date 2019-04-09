import React, { Component } from "react";

const chars = [
    '0', '1'
]


class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { char: this.getRandomChar() };
    }

    getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    showRandomly() {
        if (this.props.primary || Math.random() > 0.2) {
            this.makeSymbolDynamic();
        }
    }

    makeSymbolDynamic() {
        setInterval(() => {
            this.setState({ char: this.getRandomChar() });
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.char}
            </div>
        );
    }
}

export default Cell;
