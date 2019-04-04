import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        const transBlue = {
            backgroundColor: "rgba(0,123,255,0.5)",
            boxShadow: "rgba(0,0,0,0.5) 0 0 5px"
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={transBlue}>
                <Link className="navbar-brand text-white font-weight-bold" to="/">R + R</Link>
                <ul className="nav navbar-nav ml-3 d-block">
                    <li className="nav-item active d-inline-block"><Link className="nav-link px-3" to="/">Home</Link></li>
                    <li className="nav-item d-inline-block px-3 text-white">|</li>
                    <li className="nav-item active d-inline-block"><a className="nav-link px-3" href="http://www.getbootstrap.com/">Reviews</a></li>
                    <li className="nav-item d-inline-block px-3 text-white">|</li>
                    <li className="nav-item active d-inline-block"><a className="nav-link px-3" href="http://www.getbootstrap.com/">Contact</a></li>
                </ul>
            </nav>
        )
    };
}

export default NavBar;