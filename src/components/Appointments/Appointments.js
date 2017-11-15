import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import './Appointments.css';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class Appointments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
            <div className = "datePickerContainer">
                 <DatePicker
                 selected={this.state.startDate}
                 onChange={this.handleChange}
                 placeholderText="Enter tomorrow"
                 withPortal
                 showTimeSelect
                 minTime={moment().hours(9).minutes(0)}
                 maxTime={moment().hours(17).minutes(0)}
                 shouldCloseOnSelect={false}
                 timeFormat="HH:mm"
                 dateFormat="LLL"
                 />
                 <div className = "buttonContainer">
                   <button onClick={this.handleSubmit}>Schedule My Visit</button>
                 </div>
            </div>);

  }
}
