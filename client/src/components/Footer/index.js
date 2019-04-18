import React, { Component } from "react";
import { Link } from "react-router-dom";

const footerStyle = {
    backgroundColor: "rgb(0,123,255)",
    boxShadow: "rgba(0,0,0,0.5) 0 0 5px",
    flexShrink: 0,
    minHeight: "60px"
}

const shadowStyle = {
    textShadow: "rgba(0,0,0,1) 1px 1px 1px"
}

class Footer extends Component {
    super(props) {
    };

    imageStyle = {
        maxWidth: "120px"
    };

    roundedCorners = {
        overflow: "hidden"
    };


    render() {
        return (
            <footer className="d-block w-100" style={footerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-sm-6">
                            <p className="text-white d-inline-block mt-3 mt-sm-0" style={shadowStyle}>Powered by</p>
                            <img alt="" className="img-fluid d-inline-block" src={"/images/Yelp_trademark_RGB.png"} style={this.imageStyle} />
                        </div>
                        <div className="col col-sm-6 ml-auto">
                            <ul className="list-inline my-3 float-right rounded" style={this.roundedCorners}>
                                <li className="list-inline-item py-2 px-3 m-0 border-right border-dark"><a className="text-white" href="https://github.com/Amal2774" rel="noopener noreferrer" target="_blank">@Amal2774</a></li>
                                <li className="list-inline-item py-2 px-3 m-0 border-right border-dark"><a className="text-white" href="https://github.com/bking1989" rel="noopener noreferrer" target="_blank">@bking1989</a></li>
                                <li className="list-inline-item py-2 px-3 m-0 border-right border-dark"><a className="text-white" href="https://github.com/Tygabomb" rel="noopener noreferrer" target="_blank">@Tygabomb</a></li>
                                <li className="list-inline-item py-2 px-3 m-0"><a className="text-white" href="https://github.com/joshromea" rel="noopener noreferrer" target="_blank">@joshromea</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;