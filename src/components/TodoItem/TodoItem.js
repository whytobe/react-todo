import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
        <li style={{
          textDecoration: this.props.data.completed ? 'line-through' : '',
        }}>
          <span onClick={() => this.props.onToggleClick(
              this.props.id)}>{this.props.data.text}</span>
          <button type="button"
                  onClick={() =>
                      this.props.onRemoveClick(this.props.id)}>del
          </button>
        </li>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onRemoveClick: PropTypes.func,
  onToggleClick: PropTypes.func,
};

export default TodoItem;