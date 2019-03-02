import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./App.css";
import config from '../config';
import 'firebase/database';
import app from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';

app.initializeApp(config);
// var auth = app.auth();
// var db_firebase = app.database();
const db_firestore = app.firestore();


class UserTable extends Component {
constructor(props){
    super(props);
    this.state = {
        users: [],

    };
}



componentDidMount() {
  const userRef = db_firestore.collection('users');
  userRef.get()
  .then(users => {
    let newData = [];
    

    users.docs.map((user, index ) => {
      console.log(user);
      newData.push({
        id: index+1, 
        email:user.id,
        device:user.data()['device-id']})
      })
    this.setState({
        users: newData
      });
    })
  .catch(error => {
    alert("check your network connection!!!" + error)
    console.log(error);
  });
}

render () {    
  return (
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th >Device</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
        
          {this.state.users.map((user) => {
              return (

                

                <tr>
                  <td>{ user.id }</td>
                  <td>{ user.email }</td>
                  <td>{ user.device }</td>
                </tr>
              )
          })}
      </MDBTableBody>
    </MDBTable>
  );
}
}

export default UserTable;