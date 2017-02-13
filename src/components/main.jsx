import React, { Component } from 'react';
import {connect}            from 'react-redux';
import VacancyChart from './chart.jsx';


const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Baltimore's Vacant Housing Problem</h1>
        <div className="chart">
          <VacancyChart/>
        </div>
      </div>
    );
  }
}
export default Main;
