import React, { Component } from "react";
import { Link } from "react-router-dom";

const footerStyle = {
    backgroundColor: "rgb(0,123,255)",
    minHeight: "60px"
}

class Footer extends Component {
    super(props) {
    }

    imageStyle = {
        maxWidth: "120px"
    }

    render() {
        return (
            <footer className="d-block fixed-bottom w-100" style={footerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-sm-6">
                            <p className="text-white d-inline-block mt-3 mt-sm-0">Powered by</p>
                            <img alt="" className="img-fluid d-inline-block" src={"/images/Yelp_trademark_RGB.png"} style={this.imageStyle} />
                        </div>
                        <div className="col-4 col-sm-3 ml-auto">
                            <ul className="list-group my-3">
                                <li className="list-group-item"><a className="text-dark" href="https://github.com/Amal2774" rel="noopener noreferrer" target="_blank">Ashley</a></li>
                                <li className="list-group-item"><a className="text-dark" href="https://github.com/bking1989" rel="noopener noreferrer" target="_blank">Bradley</a></li>
                                <li className="list-group-item"><a className="text-dark" href="https://github.com/Tygabomb" rel="noopener noreferrer" target="_blank">Brandon</a></li>
                                <li className="list-group-item"><a className="text-dark" href="https://github.com/joshromea" rel="noopener noreferrer" target="_blank">Josh</a></li>
                            </ul>
                        </div>
                        <div className="col-4 col-sm-3 ml-auto">
                            <ul className="list-group my-3">
                                <li className="list-group-item"><Link className="text-dark" to="/">Home</Link></li>
                                <li className="list-group-item"><a className="text-dark" href="/">Reviews</a></li>
                                <li className="list-group-item"><a className="text-dark" href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;