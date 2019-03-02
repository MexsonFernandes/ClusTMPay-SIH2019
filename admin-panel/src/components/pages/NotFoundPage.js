import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';
import logo from "../../assets/paytm.jpg";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
          <h3>The good thing about notifications is they remind your users that your app is installed. A bad thing about notifications is they remind your users that your app is installed.</h3>
            <img alt="Error 404" className="img-fluid" hieght="20px" src={logo}/>
            
            <h2 className="h2-responsive mt-3 mb-2">404. That's an error.</h2>
            <h2>The requested URL was not found on this server.</h2>
            
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
          </MDBCol>
        </MDBRow>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;