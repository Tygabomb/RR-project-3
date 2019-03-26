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
                    <div className="col-4 col-sm-6">
                        <img src="./images/Yelp_trademark_RGB.png" />
                    </div>
                    <div className="col-4 col-sm-3 ml-auto">
                        <ul className="list-group list-group-flush my-3">
                            <li className="list-group-item">Ashley</li>
                            <li className="list-group-item">Bradley</li>
                            <li className="list-group-item">Brandon</li>
                            <li className="list-group-item">Josh</li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-3 ml-auto">
                        <ul className="list-group list-group-flush my-3">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Reviews</li>
                            <li className="list-group-item">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;