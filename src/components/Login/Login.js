import React, { Component } from 'react';
import './Login.css';

import axios from 'axios';
import {Link} from 'react-router-dom';


class Login extends Component {

  constructor() {
    super();
    this.state = {
      login: {
      username:'',
      userpass:''
        }
      }
    }

    handleChange = (event) => {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  let newLogin = Object.assign({}, this.state.login);
  newLogin[name] = value;

  this.setState({
    login: newLogin
  })
}


// handleSubmit = (event) => {
//   const name = event.target.name;
//   console.log('Hello Dallin');
//   axios.post(`http://localhost:3000/api/auth/${name}`, this.state.login).then(response => {
//   console.log(response);
//  })
// }

render(){
    return(
      <div className="App">
        <div className = "registerApp">
            <span className = "authInputHeader">Username</span>
            <input
             className = "authInput"
             name = 'username'
             value = {this.state.username}
             onChange = {this.handleChange}
             />

            <span className = "authInputHeader">Password</span>
            <input
               className = "authInput"
               name = 'userpass'
               value = {this.state.userpass}
               onChange = {this.handleChange}
               />

          <div className = "buttons">
            <Link to = {'dashboard'}>
              <button className = "authLogin" name = 'login' onClick = {this.handleSubmit}>Login</button>
            </Link>
            <Link to = {'dashboard'}>
            <button className = "authRegister" name = 'register' onClick = {this.handleSubmit}>Register</button>
            </Link>
          </div>
          </div>
        </div>

    )
  }














}

export default Login;
