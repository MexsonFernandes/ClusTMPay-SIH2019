import React, {Component  } from 'react';
//import proxy from 'http-proxy-middleware';
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GeoFencing extends Component{
    constructor()
    {
        super()
        this.state = {
            lat : '',
            lng : ''
        }
        this.handleClick = this.handleClick.bind(this);
        axios.defaults.withCredentials = true;
    }
  
   
//http://10.42.0.138:8080/api/data/geolocation
    handleClick() {
        axios.get('http://192.168.43.94:8080/api/data/geolocation  ')
        .then(function(response){
            if(response.status === 200 && response != null)
            var data=response.data;
             var lat=response.data.lat;
            console.log(data);
        }).catch(function(error){
            console.log(error)


        })
    }
    render(  )
    {

        var points = [
            { lat: 42.02, lng: -77.01 },
            { lat: 42.03, lng: -77.02 },
            { lat: 41.03, lng: -77.04 },
            { lat: 42.05, lng: -77.02 }
        ]
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
          bounds.extend(points[i]);
        }

        return(
            <div className='button_container'>
            <button className = 'button' onClick={this.handleClick}>SHOW</button>
            <React.Fragment>
                
             <Map google={this.props.google} zoom={18}
             initialCenter={{
                lat: 28.609740799999997,
                lng: 77.3603328
              }}
                    bounds={bounds}
>
<Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 28.609740799999991, lng: 77.3607 }} />
  <Marker
    name={'Dolores park'}
    position={{lat: 28.609740799999990, lng: 77.3604}} />
  <Marker />
  <Marker
    name={'Your position'}
    position={{lat: 28.609740799999995, lng: 77.366}}
     />
        <Marker
    name={'Your position'}
    position={{lat: 28.609740799999993, lng: 77.368}}
     />
   <Marker
    name={'Your position'}
    position={{lat: 28.609740799999993, lng: 77.369}}
     />


        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

    <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
 
 
</Map>
                </React.Fragment>    
            </div>          

            
        )
    }
    }
    export default GoogleApiWrapper({
  apiKey: ("AIzaSyDSGFlmvm6ZnkOnvQG65h4Ud4-6R6i0F7A")
})(GeoFencing);