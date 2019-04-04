import React, { Component } from "react";

class Profile extends Component {
    super(props) {}

    constructor() {
        super();
        this.state = {
            profileImage: "",
            username: "JDoe1989",
            firstName: "John",
            lastName: "Doe",
            email: "jdoe@domain.com",
            memberSince: "January 1, 2019"
        }
    }

    componentDidMount = () => {
        document.getElementById("root").style.height = "100vh";
        document.getElementById("root").style.display = "flex";
        document.getElementById("root").style.flexDirection = "column";
    }

    componentWillUnmount = () => {
        document.getElementById("root").style.height = "";
        document.getElementById("root").style.display = "block";
        document.getElementById("root").style.flexDirection = "row";
    }

    userImage = { 
        // backgroundImage: "url('" + this.profileImage + "')",
        backgroundColor: "grey",
        borderRadius: "50%",
        height: "250px",
        width: "250px",
    }

    de_bold = {
        fontWeight: "normal"
    }

    flexBody = {
        flex: "1 0 auto"
    }

    render () {
        return (
            <div className="container mt-5" style={this.flexBody}>
                <div className="card">
                    <div className="card-header"><b>My Profile</b></div>
                    <div className="card-body">
                        <div className="row mx-3">
                            <div className="col-sm-3">
                                <div className="mx-auto mx-sm-0" style={this.userImage} />
                            </div>
                            <div className="col-sm-8 ml-sm-auto mt-3 mt-sm-0">
                                <h2 className="text-center text-sm-left">User Profile for {this.state.username}</h2>
                                <br />
                                <h5>Name: <span style={this.de_bold}>{this.state.firstName} {this.state.lastName}</span></h5>
                                <h5>Email: <span style={this.de_bold}>{this.state.email}</span></h5>
                                <h5>Member Since: <span style={this.de_bold}>{this.state.memberSince}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Profile;