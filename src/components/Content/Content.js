import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import {Button, Col, Grid, ListGroup, Row} from 'react-bootstrap';

class Content extends React.Component {
  todoInput;

  constructor(props) {
    super(props);

    this.state = {
      data: props.initialData,
    };
  }

  addTodoItem(e) {
    const input = this.refs.todoInput;
    this.setState(prevState => ({
      data: [
        ...prevState.data,
        {
          text: input.value,
          completed: false,
        }],
    }));

  }

  removeTodoItem(id) {
    console.log('remove item', id);
    this.setState(prevState => {
      prevState.data.splice(id, 1);
      return {
        data: prevState.data,
      };
    });
  }

  onToggleClick(id) {
    console.log('toggle item', id);
    this.setState(prevState => {

      prevState.data[id].completed = !prevState.data[id].completed;
      console.log(prevState.data);
      return {
        data: prevState.data,
      };
    });

  }

  render() {
    return (
        <Grid>
          <Row>
            <Col>
              <input className="form-control" type="text" ref="todoInput" />
              <Button
                  bsSize="small"
                  bsStyle="primary" type="button"
                    onClick={(e) => this.addTodoItem(e)}>
                Add
              </Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup style={{textAlign: 'left'}}>
                {this.state.data.map((item, id) => {
                  return <TodoItem
                      key={id} id={id} data={item}
                      onToggleClick={id => this.onToggleClick(id)}
                      onRemoveClick={id => this.removeTodoItem(id)} />;
                })}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
    );
  }
}

Content.propTypes = {
  initialData: PropTypes.array,
};

Content.defaultProps = {
  initialData: [
    {
      text: 'Hello World',
      completed: false,
    },
  ],
};

export default Content;