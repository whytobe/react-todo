import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';

class Content extends React.Component {
  todoInput;

  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
    };
  }

  addTodoList() {
    const input = this.refs.todoInput;

    let new_state = this.state.data;
    new_state.push({
      text: input.value,
    });

    this.setState({data: new_state});
  }

  render() {
    return (
        <div>
          <div>
            <h2>Todo Lists</h2>
            <input type="text" ref="todoInput" />
            <button type="button" onClick={() => this.addTodoList()}>
              Add
            </button>
          </div>
          <hr />
          {this.state.data.map((item, id) => {
            return <TodoItem key={id} data={item} />;
          })}
        </div>
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