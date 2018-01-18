import React, { Component } from 'react'
import './grid.css'

/**
 * @description Grid Component.
 */
class Grid extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;