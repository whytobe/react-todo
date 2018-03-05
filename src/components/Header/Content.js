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

  addTodoList(e) {
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

  render() {
    return (
        <div>
          <div>
            <h2>Todo Lists</h2>
            <input type="text" ref="todoInput" />
            <button type="button"
                    onClick={(e) => this.addTodoList(e)}>
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