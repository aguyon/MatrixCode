import React, { Component } from "react";
import Cell from './Cell';

class Col extends Component {

    makeSymbolDynamic() {
        setInterval(() => {
            this.setState({ char: this.getRandomChar() });
        }, 1000);
    }

    render() {
        const cells = []
        for (let j = 0; j < 20; j++) {
            cells[j] = 0;
        }
        
        return (
            <div className="Col">
                {cells.map((tileId, colIndex) =>
                    <div key = {colIndex} className='cell'>
                        <Cell />
                    </div>
                )}
            </div>
        );
    }
}

export default Col;