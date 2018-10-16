import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import 'bootstrap'

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

