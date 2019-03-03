import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';


// import app from 'firebase/app';
// var db_firebase = app.database();

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class NotificationPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			action_time: '',
			receive_time :''
	
		};
	}

	// componentDidMount() {
	// 	const userRef = db_firebase.collection('sihh-6d358/send_notification_activity');
	// 	userRef.get()
	// 	.then(user => {
	// 	  console.log(user)
	// 	  })
	// 	.catch(error => {
	// 	  alert("check your network connection!!!" + error)
	// 	  console.log(error);
	// 	});
	//   }
	


  render()
  {

    const options = {
			animationEnabled: true,
			title: {
				text: "NOTIFICATION INTERACTION"
			},
			subtitles: [{
				text: "71% INTERACTION",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "DISMISSED", y: 5 },
					{ name: "DELAYED DISMISSED", y: 31 },
					{ name: "ACCEPTED ON TIME", y: 40 },
					{ name: "DELAYED ACCEPTED", y: 17 },
					{ name: "NO RESPONSE", y: 7 }
				]
			}]
		}


    return(

      <React.Fragment>
     <div>
			<CanvasJSChart options = {options}/>			
		</div>

      </React.Fragment>


    );
	}}



export default NotificationPage;
