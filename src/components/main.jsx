import React, { Component } from 'react';
import {connect}            from 'react-redux';
import d3                   from 'd3';
const C3Chart = require("../../node_modules/c3-react/lib/C3Chart.js");


const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      type: '',
      options: ''
    };
  }
  componentWillMount() {
    let data1 = [
      {
        key: "dataSource1",
        values: [
          {label: "A", value: 3},
          {label: "B", value: 4}
        ]
      },
      {
        key: "dataSource2",
        values: [
          {label: "X", value: 7},
          {label: "Y", value: 8}
        ]
      }
    ];

    let type1 = "pie";

    let options1 = {
      padding: {
        top: 20,
        bottom: 20,
        left: 40,
        right: 10
      },
      size: {
        width: 800,
        height: 600
      },
      subchart: false,
      zoom: true,
      grid: {
        x: false,
        y: true
      },
      labels: true,
      axisLabel: {
        x: "product",
        y: "quantity"
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
        <h1>Baltimore's Vacant Housing Problem</h1>
        <div className="chart">
          <C3Chart data={this.state.data} type={this.state.type} options={this.state.options}/>
        </div>
      </div>
    );
  }
}
export default Main;
