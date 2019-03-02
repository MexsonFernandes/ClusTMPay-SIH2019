import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class NotificationPage extends Component{
  render()
  {

    const options = {
			animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			subtitles: [{
				text: "71% Positive",
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
					{ name: "Unsatisfied", y: 5 },
					{ name: "Very Unsatisfied", y: 31 },
					{ name: "Very Satisfied", y: 40 },
					{ name: "Satisfied", y: 17 },
					{ name: "Neutral", y: 7 }
				]
			}]
		}


		// const nextc = {
		// 	animationEnabled: true,
		// 	exportEnabled: true,
		// 	theme: "dark2", // "light1", "dark1", "dark2"
		// 	title:{
		// 		text: "Trip Expenses"
		// 	},
		// 	data: [{
		// 		type: "pie",
		// 		indexLabel: "{label}: {y}%",		
		// 		startAngle: -90,
		// 		dataPoints: [
		// 			{ y: 20, label: "Airfare" },
		// 			{ y: 24, label: "Food & Drinks" },
		// 			{ y: 20, label: "Accomodation" },
		// 			{ y: 14, label: "Transportation" },
		// 			{ y: 12, label: "Activities" },
		// 			{ y: 10, label: "Misc" }	
		// 		]
		// 	}]
		// }
		


    return(

      <React.Fragment>
     <div>
			<CanvasJSChart options = {options}/>			
		</div>

      </React.Fragment>


    );
  }
}


export default NotificationPage;
