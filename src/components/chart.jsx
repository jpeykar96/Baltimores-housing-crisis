import React, { Component } from 'react';
import {connect}            from 'react-redux';
import d3                   from 'd3';
const C3Chart = require("../../node_modules/c3-react/lib/C3Chart.js");
import modifyVacancy from '../mods/vacancy.js';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.data = require('json-loader!../../vacancy.json');
    this.state = {
      data: '',
      type: '',
      options: ''
    };
  }
  componentWillMount() {

    let data1 = modifyVacancy(this.data);

    let type1 = "pie";

    let options1 = {
      padding: {
        top: 20,
        bottom: 20,
        left: 40,
        right: 10
      },
      size: {
        width: 1000,
        height: 800
      },
      subchart: false,
      zoom: false,
      grid: {
        x: false,
        y: false
      },
      labels: false,
      tooltip: {
        format: {
          value: function (value, ratio, id, index) { return value; }
        }
      },
      axisLabel: {
        x: "Neighborhood",
        y: "Vacancies"
      },
      onClick: function(d) {
        let categories = this.categories(); //c3 function, get categorical labels
        console.log(d);
        console.log("you clicked {" + d.name + ": " + categories[d.x] + ": " + d.value + "}");
      }
    };
    this.setState({data: data1});
    this.setState({type: type1});
    this.setState({options: options1});
  };
  render() {
    return (
      <div>
        <h4 style={this.styles}>Click on the city names below the chart to remove its data.</h4>
        <C3Chart data={this.state.data} type={this.state.type} options={this.state.options}/>
      </div>
    );
  }
}
export default Chart;
