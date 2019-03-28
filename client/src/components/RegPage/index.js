import React, { Component } from "react";

class RegPage extends Component {
    super(props) {
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-5">Register a New User</h1>
                <p>Please use the provided form to register yourself as a new user for R+R.</p>
                <br />
                <form className="mx-3">
                    <div className="form-group">
                        <label htmlFor="regFirstName">First Name</label>
                        <input type="text" className="form-control" id="regFirstName" placeholder="Jane" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="regLastName">Last Name</label>
                        <input type="text" className="form-control" id="regLastName" placeholder="Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="regUsername">Username</label>
                        <input type="text" className="form-control" id="regUsername" placeholder="JDoe1989" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="regEmail">E-mail</label>
                        <input type="email" className="form-control" id="regEmail" placeholder="jdoe@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="regPassword">Password</label>
                        <input type="password" className="form-control" id="regPassword" />
                        <small>Insert password instructions and parameters here.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwVerify">Re-type Password</label>
                        <input type="password" className="form-control" id="pwVerify" />
                        <small>Please re-type your password here.</small>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg float-right">Cancel</button>
                    <button type="button" className="btn btn-primary btn-lg float-right mr-2">Submit</button>
                </form>
            </div>
        )
    };
}

export default RegPage;