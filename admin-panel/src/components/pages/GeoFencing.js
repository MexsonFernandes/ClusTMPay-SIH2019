import React, { Component } from 'react';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import config from '../config';
import axios from 'axios';
import ReactDOM from 'react-dom';


 class GeoFencing extends Component{

    constructor(props) {
        super(props)
        this.state = {lat:'',
        lng:''}
        }

        

        handleClick () {
            axios.get('http://10.42.0.138:8080/api/data/geolocation')            
            .then(console.log(response.data))


            // .catch(error => {
            //     alert("check your network connection!!!" + error)
            //     console.log(error);
            //   });
            console.log(this.state.lat);
            console.log(this.state.lng);
            
        }
    

     render()
     {
         return(
                
            
            <div className='button_container'
            >
            <button className='button' onClick={this.handleClick}>Click me</button>
           
            
            </div>
               
            
         )
     }
 }
//  export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDviuKo0elnW1HCnaqCPRAS6Ya1WIMZwSM")
//   })(GeoFencing)
export default GeoFencing;