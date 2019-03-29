<<<<<<< HEAD
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import FormContainer from "./components/FormContainer"
import Footer from "./components/Footer"
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RegPage from "./components/RegPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

{/* {<Roulette options={options} baseSize={300} onComplete={handleOnComplete} />} */ }
>>>>>>> 9a295b115ff803578583ea7cb8fb57555855136c

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Navbar />
        <FormContainer />
        <Footer /> 
=======
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
>>>>>>> 9a295b115ff803578583ea7cb8fb57555855136c
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 9a295b115ff803578583ea7cb8fb57555855136c
