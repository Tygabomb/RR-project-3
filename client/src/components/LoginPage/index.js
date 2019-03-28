import React, { Component } from "react";

class LoginPage extends Component {
    super(props) {
    }

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
        return (
            <div className="container" style={this.containerStyle}>
                <div className="card" style={this.cardStyle}>
                    <br />
                    <h2 className="text-center">Welcome to R + R!</h2>
                    <br />
                    <form>
                        <div className="form-group mx-5">
                            <label htmlFor="formUsername">Username</label>
                            <input type="text" className="form-control" id="formUsername" /> 
                        </div>
                        <div className="form-group mx-5">
                            <label htmlFor="formPassword">Password</label>
                            <input type="password" className="form-control" id="formPassword" />
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary d-inline-block mx-1">Register</button>
                            <button type="button" className="btn btn-primary d-inline-block mx-1">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default LoginPage;