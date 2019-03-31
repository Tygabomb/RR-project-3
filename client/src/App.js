import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import './App.css';
import RegPage from "./components/RegPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/app">
              <Navbar />
              <Footer />
            </Route>
            <Route exact path="/register">
              <RegPage />
            </Route>
          </Switch>
        </Router>
        </Provider>
    );
  }
}

export default App;