import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 //   var CanvasJS = CanvasJSReact.CanvasJS;
class UserBehaviour extends Component{
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "Recieved time vs Action time"
			},
			subtitles: [{
				text: "Notifications Recorded from Backend server"
			}],
			axisX: {
				title: "States"
			},
			axisY: {
				title: "Refuse",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD",
				includeZero: false
			},
			axisY2: {
				title: "Clicks",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "PER CLICKS",
				showInLegend: true,
				xValueFormatString: "MMM ",
				yValueFormatString: "#,##0 Units",
				dataPoints: [
					{ x: new Date(2019, 2, 1), y: 10 },
					{ x: new Date(2019, 2, 1), y: 20 },
					{ x: new Date(2019, 2, 1), y:30 },
					{ x: new Date(2019, 2, 1), y: 40 },
					{ x: new Date(2019, 2, 1), y:50 },
					{ x: new Date(2019, 2, 1), y: 60 },
					{ x: new Date(2019, 2, 1), y: 70 },
					{ x: new Date(2019, 2, 1), y: 80 },
					{ x: new Date(2019, 2, 1), y: 90 },
					{ x: new Date(2019, 2, 1), y: 100 },
					{ x: new Date(2019, 2, 1), y: 110 },
					{ x: new Date(2019, 2, 1), y: 120 }
				]
			},
			{
				type: "spline",
				name: "Frequency",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM",
				yValueFormatString: "$#,##0.#",
				dataPoints: [
					{ x: new Date(2019, 2, 1), y: 19034.5 },
					{ x: new Date(2019, 2, 1), y: 20015 },
					{ x: new Date(2019, 2, 1), y: 27342 },
					{ x: new Date(2019, 2, 1), y: 20088 },
					{ x: new Date(2019, 2, 1), y: 20234 },
					{ x: new Date(2019, 2, 1), y: 29034 },
					{ x: new Date(2019, 2, 1), y: 30487 },
					{ x: new Date(2019, 2, 1), y: 32523 },
					{ x: new Date(2019, 2, 1), y: 20234 },
					{ x: new Date(2019, 2, 1), y: 27234 },
					{ x: new Date(2019, 2, 1), y: 33548 },
					{ x: new Date(2019, 2, 1), y: 32534 }
				]
			}]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
			
}
export default UserBehaviour;   