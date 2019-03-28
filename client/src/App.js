import React, { Component } from 'react';
import './App.css';
import LoginPage from "./components/LoginPage";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
        {/* <Navbar /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
