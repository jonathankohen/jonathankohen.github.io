import React, { Component } from 'react';
import Header from '../layout/Header';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%',
    height: '40%'
};

export class Directions extends Component {
    state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <React-Fragment>
                <Header />
                <h1 className="mb-5">Come dine with us!</h1>
                <div className="container">
                    <Map
                        google={this.props.google}
                        zoom={5}
                        style={mapStyles}
                        initialCenter={{
                            lat: 34.464249,
                            lng: -124.022836
                        }}
                    >
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'The Krusty Krab'}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </React-Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyArzMyyfTKyN0stVG2MwNkeL94L6zSm8P4'
})(Directions);
