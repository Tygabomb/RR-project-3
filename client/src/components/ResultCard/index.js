import React from "react";

const addClass = (e) => {
    e.target.classList.add("click");
}

function ResultCard(props) {
    return (
        <div className="container">
            <div className="card my-3 mx-auto">
                <i className="fas fa-star" id="favorite" onClick={addClass} />
                <div className="row">
                    <div className="col text-center text-sm-left">
                        <img className="img img-fluid img-thumbnail m-3" alt="" src={props.image || "https://via.placeholder.com/200"} /> 
                    </div>
                    <div className="col-sm-9">
                        <h2 className="ml-sm-3 mt-3 text-center text-sm-left">{props.name || "The Placeholder Diner"}</h2>
                        <h5 className="ml-sm-3 mb-3 text-center text-sm-left">{props.address || "1234 Fake Street, Fake Town, CA 56789"}</h5>
                        <ul className="list-group list-group-flush mx-3 ml-sm-0 mr-sm-3">
                            <li className="list-group-item">
                                <b>Type:</b> {props.type || "Diner"}
                            </li>
                            <li className="list-group-item">
                                <b>Phone #:</b> {props.phoneNum || "(123) 456-7890"}
                            </li>
                            <li className="list-group-item">
                                <a className="btn btn-primary text-center text-sm-left" href={props.yelp || "https://www.getbootstrap.com/"} rel="noopener noreferrer" target="_blank">Yelp Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;