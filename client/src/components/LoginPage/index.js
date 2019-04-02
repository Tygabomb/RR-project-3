import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
    super(props) {
    }
    constructor() {
        super();
        this.state = {
            userName: "",
            userPassword: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            userName: this.state.formUserName,
            userPassword: this.state.formPassword
        };
        console.log(userData);
    };

    componentWillMount = () => {
        document.body.style.backgroundImage = "url('./images/backgroundImage.jpg')";
        document.body.style.backgroundSize = "cover";
    }

    containerStyle = {
        alignItems: "center",
        display: "flex",
        height: "100vh",
        width: "100vw"
    }

    cardStyle = {
        boxShadow: "rgba(0,0,0,0.8) 0 0 10px",
        minHeight: "300px",
        margin: "0 auto",
        width: "500px"
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container" style={this.containerStyle}>
                <div className="card" style={this.cardStyle}>
                    <br />
                    <h2 className="text-center">Welcome to R + R!</h2>
                    <br />
                    <form>
                        <div className="form-group mx-5">
                            <label htmlFor="formUsername">Username</label>
                            <input 
                                onChange={this.onChange}
                                value={this.state.userName}
                                error={errors.userName}
                                type="text" 
                                className="form-control" 
                                id="formUsername" 
                            />
                        </div>
                        <div className="form-group mx-5">
                            <label htmlFor="formPassword">Password</label>
                            <input 
                                onChange={this.onChange}
                                value={this.state.userPassword}
                                error={errors.userPassword}
                                type="password" 
                                className="form-control" 
                                id="formPassword" 
                            />
                        </div>
                        <div className="text-center">
                            <Link className="btn btn-primary d-inline-block mx-1" to="/register">Register</Link>
                            <Link className="btn btn-primary d-inline-block mx-1">Log In</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default LoginPage;