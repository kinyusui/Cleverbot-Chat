console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import axios from 'axios';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(React.createElement(Form),document.getElementById('mount'));
});