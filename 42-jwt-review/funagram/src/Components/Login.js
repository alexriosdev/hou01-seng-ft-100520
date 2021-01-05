import React from 'react';
import { withRouter } from 'react-router';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    }).then(res => res.json())
    .then(token => {
      if(token.hasOwnProperty('token'){
        localStorage.setItem('token',token.token)
        this.props.history.push('/')
      })else{
        alert('Login Failed..')
      }
    })
  }

  render(){
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"> Username </label>
          <input id="username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />

          <label htmlFor="password"> Password </label>
          <input id="password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />

          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
