import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RegPage from "./components/RegPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;