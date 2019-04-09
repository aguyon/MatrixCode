import React, { Component } from "react";
import Col from './Col';

class Matrice extends Component {
    render() {

        const cols = new Array(20).fill();
        return (
            <div className="Matrice">
                {
                    cols.map((row, rowIndex) => (
                        <div key = {rowIndex} className="column">
                            <Col />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Matrice;