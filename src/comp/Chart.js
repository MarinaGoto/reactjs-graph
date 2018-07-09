import React from "react";
import { connect } from "react-redux";
import {showlist,oslo_population } from '../actions/user';
import {Line,Bar,Pie} from 'react-chartjs-2';

class Chart extends React.Component {

  render() {

  var   chartData={
      labels:['Oslo','Trondhiem', 'Bergan', 'Stavanger', 'Alasund','Grojvik'],
    datasets:[
      {
        label:'Population',
        data:[
          this.props.user.population,
            500000,
          250000,
        100000,
      90000,
    80000,
            1000],

    backgroundColor:[
         'rgba(255,99,132,0.6)',
         'rgba(54,162,235,0.6)',
         'rgba(255,206,86,0.6)',
         'rgba(153,102,255,0.6)',
         'rgba(255,159,64,0.6)',
        '#2D1E4C',
    ]
      }
    ]
    }

console.log("THe populatioin of oslo is "+ this.props.user.population);
    return (
      <div>
        <Bar
        	data={chartData}
        	options={{
        		maintainAspectRatio: false
        	}}
        />
      </div>
    );
  }
}



function mapStateToProps(state) {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {oslo_population})(Chart);
