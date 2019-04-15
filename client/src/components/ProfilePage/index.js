import React, { Component } from "react";

class Profile extends Component {
    state = {
        profileImage: "https://via.placeholder.com/200",
        username: "JDoe1989",
        firstName: "John",
        lastName: "Doe",
        email: "jdoe@domain.com",
        memberSince: "January 1, 2019",
        savedLocations: []
    }

    updateLocations = () => {
        let data = [
            {
                image: "https://via.placeholder.com/300",
                name: "The Random Restaurant #1",
                address: "1234 Fake Street, Springfield, MA 01234",
                type: "Diner",
                phoneNum: "123-456-7890",
                website: "https://www.yelp.com/",
                yelp: "https://www.yelp.com/"
            },
            {
                image: "https://via.placeholder.com/300",
                name: "The Random Restaurant #2",
                address: "5678 Fake Street, Springfield, MA 01234",
                type: "Mexican",
                phoneNum: "123-654-0987",
                website: "https://www.yelp.com/",
                yelp: "https://www.yelp.com/"
            }
        ];

        this.setState({
            savedLocations: [...this.state.savedLocations, ...data]
        })
    }

    componentDidMount = () => {
        document.getElementById("root").style.height = "100vh";
        document.getElementById("root").style.display = "flex";
        document.getElementById("root").style.flexDirection = "column";
        document.body.style.background = "url('/images/background.png')";
    }

    componentWillUnmount = () => {
        document.getElementById("root").style.height = "";
        document.getElementById("root").style.display = "block";
        document.getElementById("root").style.flexDirection = "row";
        document.body.style.background = "";
    }

    userImage = {
        backgroundImage: "url('" + this.state.profileImage +  "')",
        backgroundColor: "grey",
        borderRadius: "50%",
        height: "200px",
        width: "200px",
    }

    de_bold = {
        fontWeight: "normal"
    }

    flexBody = {
        flex: "1 0 auto"
    }

    render () {
        return (
            <div className="container" style={this.flexBody}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="mx-5">Profile Information</h1>
                <br />
                <div className="card mx-3 mx-sm-5">
                    <div className="card-header"><b>My Profile</b></div>
                    <div className="card-body">
                        <div className="row mx-3">
                            <div className="col-sm-2">
                                <div className="mx-auto mx-sm-0" style={this.userImage} />
                            </div>
                            <div className="col-sm-9 ml-sm-auto mt-3 mt-sm-0">
                                <h2 className="text-center text-sm-left">User Profile for {this.state.username}</h2>
                                <br />
                                <h5>Name: <span style={this.de_bold}>{this.state.firstName} {this.state.lastName}</span></h5>
                                <h5>Email: <span style={this.de_bold}>{this.state.email}</span></h5>
                                <h5>Member Since: <span style={this.de_bold}>{this.state.memberSince}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <h1 className="mx-5">Favorites</h1>
                <br />
                {this.state.savedLocations.map(location => {
                    return (
                        <div className="card mx-3 mx-sm-5 my-2">
                            <div className="card-header"><b>Favorite: {location.name}</b></div>
                            <div className="card-body">
                                <div className="row mx-3">
                                    <div className="col-sm-3 text-center text-sm-left">
                                        <img alt="" src={location.image} className="img img-fluid img-thumbnail" />
                                    </div>
                                    <div className="col-sm-9 ml-auto mt-3 mt-sm-0">
                                        <h2>{location.name}</h2>
                                        <h4>{location.address}</h4>
                                        <br />
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><b>Phone #:</b> {location.phoneNum}</li>
                                            <li className="list-group-item"><b>Type:</b> {location.type}</li>
                                            <li className="list-group-item">
                                                <a className="btn btn-primary mr-2" href={location.website} rel="noopener noreferrer" target="_blank">Website</a>
                                                <a className="btn btn-primary" href={location.yelp} rel="noopener noreferrer" target="_blank">Yelp Page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    };
}

export default Profile;