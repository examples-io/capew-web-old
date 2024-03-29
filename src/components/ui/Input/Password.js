import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './input.css'

/**
 * @description
 * @param {string} id -
 * @param {string} css -
 * @param {node} children -
 */
class Password extends Component {
    render() {
        let combinedStyle = "input " + (this.props.css ? this.props.css : " ");

        return (
            <div className={combinedStyle}>
            </div>
        );
    }
}

Password.propTypes = {
    id: PropTypes.string,
    css: PropTypes.string,
    children: PropTypes.node,
}

export default Password;