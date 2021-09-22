import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '30vw',
  height: '100vh;'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 29.4241,
            lng: 98.4936
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
