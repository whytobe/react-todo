import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

export default class HolidayRow extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    start_date: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tr>
          <td>{this.props.data.firstname} ({this.props.data.nickname}) {this.props.data.lastname}</td>
          <td><Moment format="DD/MM/YYYY"
                      date={this.props.data.start_date} /></td>
          <td><Moment format="DD/MM/YYYY"
                      date={this.props.data.end_date} /></td>
          <td>{this.props.data.duration} วัน</td>
          <td>{this.props.data.reason}</td>
          <td>{this.props.data.note}</td>
          <td>{this.props.data.created_by}</td>
        </tr>
    );
  }

}