import React, { Component } from 'react'
import './header.css'

/**
 * @description Header Component.
 */
class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
}

export default Header;