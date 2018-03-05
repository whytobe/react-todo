import React from 'react';

export default class HolidayFoot extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tfoot>
        <tr className="bg-primary">
          <th>ชื่อ-นามสกุล</th>
          <th>ลาวันที่</th>
          <th>ถึงวันที่</th>
          <th>ระยะเวลา</th>
          <th>เหตุผล</th>
          <th>หมายเหตุ</th>
          <th>บันทึกโดย</th>
        </tr>
        </tfoot>
    );
  }

}