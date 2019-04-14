import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// import { Provider } from "react-redux";
// import store from "./store";

import './App.css';
import Application from "./components/App";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Profile from "./components/ProfilePage";
import RegPage from "./components/RegPage";
// import ResultCard from "./components/ResultCard";

// This is where the options for Yelp should go (ideally)
// const options = [
//   "war",
//   "pain",
//   "words",
//   "love",
//   "life",
//   'test',
//   'test',
//   'test',
//   'test',
//   'test'
// ];

// {/* {<Roulette options={options} baseSize={300} onComplete={handleOnComplete} />} */ }
const checkAuth = () => {
  axios({
    method: 'get',
    url: '/api/authenticate',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(function ({data}) {
    console.log(true)
    return true
  }).catch(function (error) {
    return false;
  });
};

const PrivateRoute = ({ component: RouteComponent, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkAuth()
      ? (
      <React.Fragment>
        <Navbar />
        <RouteComponent {...props} />
            <Footer />
        </React.Fragment>)
      : <Redirect to='/' />
  )} />
)

class App extends Component {
  flexBox = {
    flex: "1 0 auto"
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/app" component={Application} />
          <Route exact path="/register" component={RegPage} />
          {/* <Route exact path="/favorites">
            <Navbar />
            <Footer />
          </Route> */}
          <PrivateRoute exact path="/profile">
            <Navbar />
            <Profile />
            <Footer />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;