import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import {Button, Col, Grid, ListGroup, Row} from 'react-bootstrap';

class Content extends React.Component {
  todoInput;

  propTypes = {
    initialData: PropTypes.array,
  };

  defaultProps = {
    initialData: [
      {
        text: 'Hello World',
        completed: false,
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  addTodoItem = () => {
    const input = this.refs.todoInput;
    this.setState(prevState => ({
      data: [
        ...prevState.data,
        {
          text: input.value,
          completed: false,
        }],
    }));

  };

  removeTodoItem = (id) => {
    console.log('remove item', id);
    this.setState(prevState => {
      prevState.data.splice(id, 1);
      return {
        data: prevState.data,
      };
    });
  };

  onToggleClick = (id) => {
    console.log('toggle item', id);
    this.setState(prevState => {

      prevState.data[id].completed = !prevState.data[id].completed;
      console.log(prevState.data);
      return {
        data: prevState.data,
      };
    });

  };

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={9}>
              <input className="form-control" type="text" ref="todoInput" />
            </Col>
            <Col xs={3} style={{textAlign: 'left'}}>
              <Button
                  bsSize="small"
                  bsStyle="primary" type="button"
                  onClick={this.addTodoItem}>
                Add
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup style={{textAlign: 'left'}}>
                {this.state.data.map((item, id) => {
                  return <TodoItem
                      key={id} id={id} data={item}
                      onToggleClick={this.onToggleClick}
                      onRemoveClick={this.removeTodoItem} />;
                })}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default Content;