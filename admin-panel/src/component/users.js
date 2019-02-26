import React, { Component } from 'react';
//import {Button} from 'react-bootstrap';
//import { Button } from "react-mdl";
var firebase=require('firebase');
const uuid = require('uuid');

var config={
    apiKey: "AIzaSyDDK7HVgJx8BGJtdVnApejIqTGwGRj9pA4",
    authDomain: "sihh-6d358.firebaseapp.com",
    databaseURL: "https://sihh-6d358.firebaseio.com",
    projectId: "sihh-6d358",
    storageBucket: "sihh-6d358.appspot.com",
    messagingSenderId: "792619272333"

};

firebase.initializeApp(config);



class users extends Component{

    constructor(props) {
        super(props);
        this.state = {
          uid: uuid.v1(),
          firstName: '',
          lastName: '',
        };

        this.submitData = this.submitData.bind(this);
        this.inputData = this.inputData.bind(this);
    }
        

        componentDidMount() {
            firebase
              .database()
              .ref(`Newdata/${this.state.uid}`)
              .on('value', snap => console.log('from db', snap.val()));
          }

          submitData(event) {
            event.preventDefault();
            firebase
              .database()
              .ref(`Newdata/${this.state.uid}`)
              .set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
              })
              .catch(error => console.log(error));
          }
          inputData(event) {
            const firstName = this.refs.name1.value;
            const lastName = this.refs.name2.value;
            this.setState({ firstName, lastName });
          }



    render()
    {
        return(
            <div>
            <form onSubmit={this.submitData}>
              <input type="text" onChange={this.inputData} ref="name1" />
              <input type="text" onChange={this.inputData} ref="name2" />
              <input type="submit" />Submit
            </form>
          </div>
        )
    }
}


export default users;