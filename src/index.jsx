import './main.css';
import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';
import Main         from './components/main.jsx';

const app = <Main />


const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);

ReactDOM.render(app, mountingPoint);
