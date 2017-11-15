import React from "react";
import {Switch, Route} from "react-router-dom"
import DatePicker from 'react-date-picker';

import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Appointments from './components/Appointments/Appointments.js';
import Contact from './components/ContactUs/contactus.js'



export default (
  <Switch>
    <Route component = {Home} path = "/Home" exact />
    <Route component = {Login} path = "/Login" exact />
    <Route component = {Appointments} path = '/Appointments' exact />
    <Route component = {Contact} path = '/contactus' exact />
  </Switch>
)
