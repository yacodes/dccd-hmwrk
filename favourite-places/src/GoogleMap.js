import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11,

      pin: {
        lat: null,
        lng: null,
      }
    };
  }

  render() {
    const pin = this.state.pin;

    return (
      // Important! Always set the container height explicitly
      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultZoom={this.state.zoom}
          center={this.state.center}
          onClick={event => this.setState({pin: {lat: event.lat, lng: event.lng}})}
          >
          {this.props.elements.map(element =>
            <div onClick={() => this.setState({center: {lat: element.lat, lng: element.lng}})} key={element.id} lat={element.lat} lng={element.lng} style={{border: '1px solid black', cursor: 'pointer'}}>
              {element.name}
            </div>
          )}

          {pin.lat === null || pin.lng === null ? null : (
            <div className="pin" lat={pin.lat} lng={pin.lng}/>
          )}
        </GoogleMapReact>

        <button onClick={() => {
          this.props.onCreateElement(pin.lat, pin.lng)
          this.setState({pin: {lat: null, lng: null}});
        }} disabled={pin.lat === null || pin.lng === null} type="button" style={{position: 'absolute', right: 0, top: 0}}>
          Add to fav
        </button>
      </div>
    );
  }
}

export default GoogleMap;
