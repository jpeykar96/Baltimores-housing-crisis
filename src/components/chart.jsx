import React, { Component } from 'react';
import {connect}            from 'react-redux';


const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

class Chart extends Component {
  render() {
    return (
      <div>
        <h1>Playing With React and D3</h1>
        <div className="chart"></div>
      </div>
    );
  }
}
export default Chart;
