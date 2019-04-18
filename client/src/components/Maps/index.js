import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react'
import Keys, { googleMaps } from '../../keys'
import './style.css'

const MapMarker = ({ text }) => <div className="map" id="map">{text}</div>

class Maps extends Component {

    static defaultProps = {
        center: {
            lat: 32.2226,
            lng: -110.9747
        },
        zoom: 14
    }

    // mapStyles = {
    //     width: '300px',
    //     height: '300px'
    // };

    render() {
        return (
            <div className="map" id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA2D14kzQZWyRlsGpnax8Gi_iM603ssnnU' }}
                    defaultCenter={{
                        lat: this.props.chosenLat,
                        lng: this.props.chosenLong
                    }}
                    defaultZoom={this.props.zoom}
                />
                <MapMarker
                    lat={this.props.chosenLat}
                    lng={this.props.chosenLong}
                    text={this.props.chosenName}
                />
            </div>
        )
    }
}

export default Maps

// export default GoogleApiWrapper({
//     apiKey: `AIzaSyA2D14kzQZWyRlsGpnax8Gi_iM603ssnnU`
// })(Maps)