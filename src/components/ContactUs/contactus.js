import React, { Component } from 'react';
import './contactus.css';

import {Link} from 'react-router-dom';



class Contact extends Component {
  render() {
    return (

      <div className="contactContainer">
        <body className="contact-header">
          <h1 className="address">
          Company Name Here
          1234 Main Street
          Bountiful, UT 84010</h1>
        </body>

      </div>
    );
  }
}

export default Contact;
