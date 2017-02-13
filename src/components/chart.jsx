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
const inlineStyle = {

  display: 'inline-block'
};

class VacancyChart extends Component {
  constructor(props) {
    super(props);
    this.data = require('json-loader!../../vacancy.json');
    this.state = {
      data: '',
      type: '',
      options: '',
      threshold: 150
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {

    let data1 = modifyVacancy(this.data, this.state.threshold);

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
      },
      pie: {
        label: {
          format: function (value, ratio, id) {
            return value;
          }
        }
      }
    };
    this.setState({data: data1});
    this.setState({type: type1});
    this.setState({options: options1});
  }
  handleChange(event) {
    this.setState({threshold: event.target.value});
    let data1 = modifyVacancy(this.data, this.state.threshold);
    this.setState({data: data1});
    console.log(this.state.threshold);
  }
  render() {
    return (
      <div>
        <h4 style={this.styles}>Click on the city names below the chart to remove its data.</h4>
        <label>Threshold for number of vacancies: </label>
        <input type='range' step="25" min='50' max='1000' value={this.state.threshold} onChange={this.handleChange}/>
        <p style={inlineStyle}>{this.state.threshold}</p>
        <C3Chart data={this.state.data} type={this.state.type} options={this.state.options}/>
      </div>
    );
  }
}
export default VacancyChart;
