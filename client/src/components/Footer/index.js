import React from "react";

const footerStyle = {
    backgroundColor: "rgb(0,123,255)",
    minHeight: "60px"
}

function Footer(props) {
    return (
        <footer className="d-block fixed-bottom w-100" style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-3 ml-auto">
                        <ul className="list-group my-3">
                            <li className="list-group-item text-center text-sm-left">Ashley</li>
                            <li className="list-group-item text-center text-sm-left">Bradley</li>
                            <li className="list-group-item text-center text-sm-left">Brandon</li>
                            <li className="list-group-item text-center text-sm-left">Josh</li>
                        </ul>
                    </div>
                    <div className="col-3 ml-auto">
                        <ul className="list-group my-3">
                            <li className="list-group-item text-center text-sm-left">Home</li>
                            <li className="list-group-item text-center text-sm-left">Reviews</li>
                            <li className="list-group-item text-center text-sm-left">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;