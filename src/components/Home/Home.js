import React, { Component } from 'react';
import './Home.css';

import {Link} from 'react-router-dom';



class Home extends Component {
  render() {
    return (

      <div className="home_container">
        <header className="navbar">
          <div className="navbar1">
            <div className="followus">
              <span>Follow Us</span>
            </div>

            <div className="aboutus">
              <span>About Us</span>
            </div>

            <div className="gallery">
              <span>Gallery</span>
            </div>

            <div className="login">
              <Link to={'Login'}>
                <span>Login</span>
              </Link>
            </div>

          </div>
        </header>
        <body className="body">
          <div className="appointments">
            <Link to={'Appointments'}>
              <span>Book an Appointment</span>
            </Link>
          </div>
        </body>  
      </div>
    );
  }
}

export default Home;
