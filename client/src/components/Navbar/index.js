import React from "react";

const transBlue = {
    backgroundColor: "rgba(0,123,255,0.5)"
}

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={transBlue}>
            <a className="navbar-brand text-white font-weight-bold" href="http://www.getbootstrap.com/">R + R</a>
            <ul className="nav navbar-nav ml-3 d-block">
                <li className="nav-item active d-inline-block"><a className="nav-link px-3" href="http://www.getbootstrap.com/">Home</a></li>
                <li className="nav-item d-inline-block px-3 text-white">|</li>
                <li className="nav-item active d-inline-block"><a className="nav-link px-3" href="http://www.getbootstrap.com/">Reviews</a></li>
                <li className="nav-item d-inline-block px-3 text-white">|</li>
                <li className="nav-item active d-inline-block"><a className="nav-link px-3" href="http://www.getbootstrap.com/">Contact</a></li>
            </ul>

            <div className="collapse navbar-collapse" id="navbarContent">
                <form className="form-inline ml-auto">
                    <div className="form-group">
                        <input type="search" className="form-control mr-2" id="navSearch" placeholder="Search Here" />
                    </div>
                    <button type="submit" className="btn btn-outline-light">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;