import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './map.css';
import less from './less.svg';
import more from './more.svg';


const MapIntegration = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
));


class Map extends Component {
  constructor(props) {
    super(props);

    this.textExpand = "Pokaż mapę";
    this.textHide = "Ukryj mapę";

    this.state = {
      expanded: false
    }

    this.handleExpanding = this.handleExpanding.bind(this);
  }

  handleExpanding() {
    this.setState({
      expanded: !(this.state.expanded)
    });
  }

  render() {
    return (
      <div className="map">
        <div className="button-wrapper">
          <button className='button'
                  onClick={this.handleExpanding}>
            {this.state.expanded ? this.textHide : this.textExpand}
          </button>
          <img className='icon'
               src={this.state.expanded ? less : more}
               onClick={this.handleExpanding} />
        </div>
        <div className={this.state.expanded ? "map-wrapper-expanded" : "map-wrapper-hidden"}>
          <MapIntegration isMarkerShown lat={parseFloat(this.props.lat)} lng={parseFloat(this.props.lng)}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOCIXEy1E27DQ1oCeq07ix1Ob0Rb3aMQ0&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `150px` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        </div>
      </div>
    );
  }
}

export default Map;
