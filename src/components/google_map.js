import React, { Component } from 'react';

class GoogleMap extends Component{

  // authomaticaly called after this component has been rendered in the screen.
  // we create an embebed component. Map takes a reference to an hmtl element and
  // uses it to render the map. This is how usually third party libraries are used
  // with react. The second part is an options object.
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  // ref system, it allows get a reference to an html element after this component is rendered
  // by refering it by this.refs.map. The library has no idea about how to integrat to a react application.
  render(){
    return <div ref="map" />;
  }

} export default GoogleMap;
