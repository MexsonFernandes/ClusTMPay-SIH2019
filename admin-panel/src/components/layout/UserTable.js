import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./App.css";
import config from '../config';
import 'firebase/database';
import app from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore';
import snap from 'firebase';

app.initializeApp(config);
// var auth = app.auth();
var db_firebase = app.database();

const db_firestore = app.firestore();


function getData() {
    db_firebase.ref('Newdata').on('value', snapshot => {
            // console.log(snapshot.val())
    });
//     console.log(db_firestore.collection('users'));
// db_firestore.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });



}

getData();

let user = []


class UserTable extends Component {
constructor(){
    super();
    this.state = {
        id : 0,
        email : "",
        device : ""
    };
}

getUsers() {
    db_firestore.collection("users")
    .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            user.push([doc.id, doc.data()['device-id']])
            const userList = this.state.listOfUsers;
            userList.append({
                id:  snap.key,
                email: snap.val(),
                device: snap.val()
            });
            this.setState({
                listOfUsers: userList
            });
        });
        console.log(user);
    });
}


render () {
    const listOfUsers = this.state.listOfUsers  .map(u => 
        <tr>
          <td>{u.id}</td>
          <td>{u.email}</td>
          <td>{u.device}</td>
        </tr>
        );
  return (
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th class="thSize">ID</th>
          <th  class="thSize">Email</th>
          <th class="thSize">Device</th>
        </tr>
        
</MDBTableHead>
      <MDBTableBody>
        {listOfUsers}
      </MDBTableBody>
    </MDBTable>
  );
}
}


export default UserTable;