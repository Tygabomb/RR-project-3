import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Provider } from "react-redux";
// import store from "./store";

import './App.css';
import Application from "./components/App";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Profile from "./components/ProfilePage";
import RegPage from "./components/RegPage";
<<<<<<< HEAD
import NoMatch from "./pages/NoMatch";
import ResultCard from "./components/ResultCard";
=======
import ResultCard from "./components/ResultCard";
// import ResultCard from "./components/ResultCard";
>>>>>>> 29f5fc22cc766db24ba721aa89f1d87c513b9431

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

class App extends Component {
  flexBox = {
    flex: "1 0 auto"
  }

  render() {
    return (
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/app">
            <Navbar />
            <Application />
            <Footer />
          </Route>
          <Route exact path="/register" component={RegPage} />
          <Route exact path="/favorites">
            <Navbar />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Route component={NoMatch} />
            <Navbar />
            <Profile />
            <Footer />
          </Route>
          <Route exact path="/test">
            <ResultCard />
          </Route>
        </Switch>
      </Router>
=======
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/app">
              <Navbar />
              <Application />
              <Footer />
            </Route>
            <Route exact path="/register" component={RegPage} />
            <Route exact path="/favorites">
              <Navbar />
              <Footer />
            </Route>
            <Route exact path="/profile">
              <Navbar />
              <Profile />
              <Footer />
            </Route>
            <Route exact path="/test">
              <ResultCard />
            </Route>
          </Switch>
        </Router>
>>>>>>> 29f5fc22cc766db24ba721aa89f1d87c513b9431
    );
  }
}

export default App;