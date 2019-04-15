import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Keys from '../../keys'
import './style.css'

class Maps extends Component {

    mapStyles = {
        width: '300px',
        height: '300px'
    };

    render() {
        return (
            <div className="map" id="map">
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: this.props.chosenLat,
                        lng: this.props.chosenLong
                    }}
                    style={this.mapStyles}
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: `AIzaSyA2D14kzQZWyRlsGpnax8Gi_iM603ssnnU`
})(Maps)