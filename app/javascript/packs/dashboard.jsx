import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css' // from the node modules directory in the root of our app

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      loggedIn: false
    }
  }

  componentDidMount() {
    if(window.location.hash) {
      let fitbitToken = window.location.hash.match(/access_token=([^&]*)/)[1]
      console.log('fitbitToken', fitbitToken)
      this.setState({loggedIn: true})
    }
  }

  render(){
    return (
      <div className='container'>
        <header className='text-center'>
          <h1 className='page-header'>React Fit</h1>
          <p className='lead'>Your personal fitness dashboard</p>
        </header>

        {!this.state.loggedIn && (
          <div className='row text-center'>
            <a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22D8LQ&redirect_uri=http%3A%2F%localhost%3A3000&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'>
              Log in to Fitbit
            </a>
          </div>
        )}
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

