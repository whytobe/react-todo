import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
        <li>
          {this.props.data.text}
        </li>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};

export default TodoItem;