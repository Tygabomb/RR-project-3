import React, { Component } from 'react';
import './App.css';
import RegPage from "./components/RegPage";
// import LoginPage from "./components/LoginPage";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

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

class App extends Component {
  render() {
    return (
      <div>
        <RegPage />
        {/* <LoginPage /> */}
        {/* <Navbar /> */}
        {/* <Footer /> */}
        {/* {<Roulette options={options} baseSize={300} onComplete={handleOnComplete} />} */}
      </div>
    );
  }
}

export default App;
