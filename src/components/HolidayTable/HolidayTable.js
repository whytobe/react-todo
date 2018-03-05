import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FontAwesomeIcon from 'react-fontawesome';
import {Box, Content, Layout} from 'reactjs-admin-lte';
import {Col, Row} from 'react-bootstrap';
import * as Utils from '../Utils/Utils';
import HolidayRow from './HolidayRow';
import HolidayHead from './HolidayHead';
import HolidayFoot from './HolidayFoot';
import ReactPaginate from 'react-paginate';

export default class HolidayTable extends React.Component {

  static propTypes = {
    holiday_items: PropTypes.array,
// }
  };

  static defaultProps = {
    perPage: 10,
    holiday_items: Utils.makeData(100),
  };

  queryYears = [
    {value: 2017, label: '2017'},
    {value: 2018, label: '2018'},
  ];

  queryMonths = [
    {value: 0, label: 'ทั้งปี'},
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
    {value: 8, label: '8'},
    {value: 9, label: '9'},
    {value: 10, label: '10'},
    {value: 11, label: '11'},
    {value: 12, label: '12'},
  ];

  filterData = (items, year, month) => {
    return items.filter((item) => {
      const start_date = item.start_date;
      if (month === 0) {
        return year === start_date.getFullYear();
      } else {
        return month === start_date.getMonth() + 1 &&
               year === start_date.getFullYear();
      }
    }) || [];
  };

  onQueryYearChange = (query_year) => {
    this.setState({query_year: query_year.value}, () => this.onQueryChange());
  };

  onQueryMonthChange = (query_month) => {
    this.setState({query_month: query_month.value}, () => this.onQueryChange());
  };

  onQueryChange = () => {

    let filtered_items = this.filterData(
        this.props.holiday_items,
        this.state.query_year,
        this.state.query_month,
    );
    let pageCount = Math.ceil(filtered_items.length / this.props.perPage);
    let offset = this.state.offset;

    if (this.state.offset / this.props.perPage >= pageCount) {
      offset = pageCount;
    }

    filtered_items = filtered_items.slice(offset, offset + this.props.perPage);

    this.setState({
      pageCount,
      offset,
      filtered_items,
    });
  };

  handlePageClick = (data) => {

    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    console.log('show item from', offset);

    this.setState({
      offset: offset,
    }, () => this.onQueryChange());
  };

  constructor(props) {
    super(props);

    const query_year = 2017,
        query_month = 0,
        offset = 0,
        filtered_items = this.filterData(
            this.props.holiday_items,
            query_year, query_month);
    this.state = {
      offset,
      query_year,
      query_month,
      filtered_items: filtered_items.slice(0, this.props.perPage),
      pageCount: Math.ceil(filtered_items.length /
                           this.props.perPage),
    };
  }

  render() {

    return (
        <div className="content">
          <Box>
            <Box.Header>
              <Box.Title>
                <FontAwesomeIcon
                    name="history" /> ตารางประวัติลางาน
              </Box.Title>
            </Box.Header>
            <Box.Body>
              <div>
                <div className="col-xs-6 col-sm-3">
                  <Select
                      clearable={false}
                      ref="query_year"
                      name="query_year"
                      value={this.state.query_year}
                      onChange={this.onQueryYearChange}
                      options={this.queryYears} />
                </div>
                <div className="col-xs-6 col-sm-3">
                  <Select
                      clearable={false}
                      ref="query_month"
                      name="query_month"
                      value={this.state.query_month}
                      onChange={this.onQueryMonthChange}
                      options={this.queryMonths} />
                </div>
                <div className="clearfix"></div>
              </div>
              <hr />
              <div className="table-responsive">
                <table
                    className="table table-hover table-bordered table-striped">
                  <HolidayHead />
                  <HolidayFoot />
                  <tbody>
                  {this.state.filtered_items.map(
                      (item, id) => <HolidayRow key={id} data={item} />)}
                  </tbody>
                </table>

                <ReactPaginate
                    previousLabel={'ก่อนหน้า'}
                    nextLabel={'ถัดไป'}
                    breakLabel={<a href="">...</a>}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination pull-right'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
              </div>
            </Box.Body>


          </Box>
        </div>);
  }

}