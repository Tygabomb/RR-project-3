import React, { Component } from "react";
import HomeScreen from "../../pages/homeScreen";

class Application extends Component {
    constructor() {
        super();
        this.state = {
            latitude: 0,
            longitude: 0
        }
        // this.getPosition = this.getPosition.bind(this)
    }


    getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);

            function displayLocationInfo(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                // this.setState({ latitude: lat, longitude: lng })
            }
        } else {
            console.log("browser doesn't support geolocation api");
        }
    }

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