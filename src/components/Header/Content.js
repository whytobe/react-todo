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
    console.log('remove item', this, arguments);
    this.setState(prevState => {
      prevState.data.splice(id, 1);
      return {
        data: prevState.data,
      };
    });
  }

  render() {
    return (
        <div>
          <div>
            <h2>Todo Lists</h2>
            <input type="text" ref="todoInput" />
            <button type="button"
                    onClick={(e) => this.addTodoItem(e)}>
              Add
            </button>
          </div>
          <hr />
          {this.state.data.map((item, id) => {
            return <TodoItem key={id} id={id} data={item}
                             onRemoveClick={(id) => this.removeTodoItem(id)} />;
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