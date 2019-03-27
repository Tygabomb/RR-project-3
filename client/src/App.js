import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import FormContainer from "./components/FormContainer"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormContainer />
        <Footer /> 
      </div>
    );
  }
}

export default App;
