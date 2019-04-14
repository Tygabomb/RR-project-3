import React, { Component } from "react";
import HomeScreen from "../../pages/homeScreen";
import Axios from 'axios'

class Application extends Component {
    constructor() {
        super();
        this.state = {}
    }



    getPosition = () => {
        if (navigator.geolocation) {
            const displayLocationInfo = (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                this.setState({ latitude: lat, longitude: lng })
            }
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        } else {
            console.log("browser doesn't support geolocation api");
        }
    }

    // sendUserLocation = (props) => {
    //     this.props.setUserLocation(this.state)
    // }

    componentDidMount = () => {
        document.getElementById("root").style.height = "100vh";
        document.getElementById("root").style.display = "flex";
        document.getElementById("root").style.flexDirection = "column";
    }

    componentWillUnmount = () => {
        document.getElementById("root").style.height = "";
        document.getElementById("root").style.display = "block";
        document.getElementById("root").style.flexDirection = "row";
    }

    flexBody = {
        flex: "1 0 auto"
    }

    render() {
        return (
            <div className="container" style={this.flexBody}>
                {this.getPosition()}
                <br />
                <br />
                <br />
                <HomeScreen />
            </div>
        )
    };
}

export default Application;