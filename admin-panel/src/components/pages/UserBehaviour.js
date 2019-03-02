import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 //   var CanvasJS = CanvasJSReact.CanvasJS;
class UserBehaviour extends Component{
    render()
    {

        const options = {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: "Rate Of User Interaction"
			},
			axisY: {
				title: "Number of Notifications",
				logarithmic: true,
				includeZero: false
			},
			data: [{
				type: "spline",
				showInLegend: true,
				legendText: "PER CLICK NOTIFICATIONS",
				dataPoints: [
				  { x: new Date(2001, 0), y: 1615},
				  { x: new Date(2002, 0), y: 2069},
				  { x: new Date(2003, 0), y: 2635},
				  { x: new Date(2004, 0), y: 3723},
				  { x: new Date(2005, 0), y: 5112},
				  { x: new Date(2006, 0), y: 6660},
				  { x: new Date(2007, 0), y: 9183},
				  { x: new Date(2008, 0), y: 15844},
				  { x: new Date(2009, 0), y: 23185},
				  { x: new Date(2010, 0), y: 40336},
				  { x: new Date(2011, 0), y: 70469},
				  { x: new Date(2012, 0), y: 100504},
				  { x: new Date(2013, 0), y: 138856},
				  { x: new Date(2014, 0), y: 178391},
				  { x: new Date(2015, 0), y: 229300},
				  { x: new Date(2016, 0), y: 302300},
				  { x: new Date(2017, 0), y: 405000}   
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
export default UserBehaviour;   