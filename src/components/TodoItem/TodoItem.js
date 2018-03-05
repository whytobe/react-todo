import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
        <li>
          {this.props.data.text}
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
};

export default TodoItem;