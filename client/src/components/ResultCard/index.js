
import React, { Component } from "react";

class ResultCard extends Component {
    super(props) {
    };
    constructor() {
        super();
        this.state = {
            chosenName: " ",
            chosenAddress: " ",
            chosenCategories: " ",
            chosenPhoneNum: " ",
            errors: {}
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    render() {

        const { errors } = this.state;




        return (
            <div className="container">
                <div className="card my-3 mx-auto">
                    <div className="row">
                        <div className="col text-center text-sm-left">
                            <img className="img img-fluid img-thumbnail m-3" alt={this.props.chosenYelpUrl} src={this.props.chosenYelpUrl} />
                        </div>
                        <div className="col-sm-9">
                            <h2 className="ml-sm-3 mt-3 text-center text-sm-left">{this.props.chosenName}</h2>
                            <h5 className="ml-sm-3 mb-3 text-center text-sm-left">{this.props.chosenAddress || "1234 Fake Street, Fake Town, CA 56789"}</h5>
                            <ul className="list-group list-group-flush mx-3 ml-sm-0 mr-sm-3">
                                <li className="list-group-item">
                                {/* <b>Type:</b> {this.props.chosenCategories || "Diner"} */}
                                </li>
                                <li className="list-group-item">
                                    <b>Phone #:</b> {this.props.chosenPhoneNum}
                                </li>
                                <li className="list-group-item">
                                    <a className="btn btn-primary mr-2" href={this.props.website || "https://www.getbootstrap.com/"} rel="noopener noreferrer" target="_blank">Website</a>
                                    <a className="btn btn-primary text-center text-sm-left" href={this.props.yelp || "https://www.getbootstrap.com/"} rel="noopener noreferrer" target="_blank">Yelp Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultCard;