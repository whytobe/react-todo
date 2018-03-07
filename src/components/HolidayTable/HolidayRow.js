import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import {Button} from 'react-bootstrap';

export default class HolidayRow extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    start_date: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  onPushRequest = (data) => {
    fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset: UTF-8',
        'Authorization': 'Basic ZWQxMmRlYWMtNGMxYS00ODBhLThiZmUtYjhmZmQ3Mzk2Mzc3',
      },
      body: JSON.stringify({
        app_id: '8d91da23-44f0-4b61-940d-c72e15f73557',
        'headings': {
          'en': 'ทดสอบส่ง Web Push',
        },
        'contents': {
          'en': `${this.props.data.firstname} (${this.props.data.nickname}) ${this.props.data.lastname}`,
        },
        included_segments: ['All'],
      }),
    });
  };

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
          <td>
            <Button bsStyle="success" onClick={this.onPushRequest}>Push</Button>
          </td>
        </tr>
    );
  }

}