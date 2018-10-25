import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class mapLocation extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
// class SimpleMap extends Component {
 
 
  render() {
    return (
      // Important! Always set the container height explicitly
     
      
      <div style={{ height: '100vh', width: '100%' }}>
        <input type='text' placeholder='event' id='event' style={{width:'99.7%'}}></input>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          
          <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'}/>
        </GoogleMapReact>
        </div>
      
    );
  }
}
 
// export default SimpleMap;

