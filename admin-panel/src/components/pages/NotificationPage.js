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

    return(

      <React.Fragment>
     <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

      </React.Fragment>


    );
  }
}


export default NotificationPage;

	// const NotificationPage =  () => {
	//   return (
		
		
	// )}

	// export default NotificationPage;