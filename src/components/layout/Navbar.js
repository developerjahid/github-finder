import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-brand mx-auto d-block text-center bg-light">
                <h6>{this.props.logo}</h6>
            </div>
        )
    }
}

export default Navbar
