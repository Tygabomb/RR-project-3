import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

class LoginPage extends Component {
    super(props) {
    };
    constructor() {
        super();
        this.state = {
            userName: "",
            userPassword: "",
            errors: {}
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        // const userData = {
        //     userName: this.state.formUsername,
        //     userPassword: this.state.formPassword
        // };
        api.login(this.state.formUsername, this.state.formPassword)
        .then(res=>{
            console.log(res.data);
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/app')
        })
        .catch(err=>console.log(err))

    };

    containerStyle = {
        alignItems: "center",
        backgroundImage: "url('./images/backgroundImage.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        height: "100vh",
        width: "100%"
    }

    cardStyle = {
        boxShadow: "rgba(0,0,0,0.8) 0 0 10px",
        minHeight: "300px",
        width: "500px"
    }

    render() {
        const { errors } = this.state;

        return (
            <div style={this.containerStyle}>
                <div className="card mx-2 mx-sm-auto" style={this.cardStyle}>
                    <br />
                    <h2 className="text-center">Welcome to R + R!</h2>
                    <br />
                    <form>
                        <div className="form-group mx-5">
                            <label htmlFor="formUsername">Username</label>
                            <input 
                                onChange={this.onChange}
                                // value={this.state.userName}
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
                                // value={this.state.userPassword}
                                error={errors.userPassword}
                                type="password" 
                                className="form-control" 
                                id="formPassword" 
                            />
                        </div>
                        <div className="text-center">
                            <Link 
                                className="btn btn-primary d-inline-block mx-1" 
                                to="/register"
                            >
                                Register
                            </Link>
                            <button
                                className="btn btn-primary d-inline-block mx-1"
                                onClick={this.onSubmit}
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default LoginPage;