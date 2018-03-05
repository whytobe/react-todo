import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class Content extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          text: 'ทำไข่เจียว',
          completed: false,
        },
        {
          text: 'ซักผ้าให้ลูก',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
        <div>
          <div>
            <h2>Todo Lists</h2>
            <input type="text" />
            <button>Add</button>
          </div>
          <hr />
          {this.state.data.map((item, id) => {
            return <TodoItem key={id} data={item} />;
          })}
        </div>
    );
  }
}

export default Content;