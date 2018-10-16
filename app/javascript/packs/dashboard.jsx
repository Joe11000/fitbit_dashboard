import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css' // from the node modules directory in the root of our app
import from 'axios' // making api calls

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>React Fit</h1>
        <p>Your personal fitness dashboard</p>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.querySelector("[data-id='dashboard-home']")
  )
})

