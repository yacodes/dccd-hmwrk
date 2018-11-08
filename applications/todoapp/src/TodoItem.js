import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {id, isCompleted, name} = this.props;

    return (
      <div>
        <input type="checkbox" checked={isCompleted} onChange={() => this.props.onChange(id)}/>
        <span>{name}</span>
      </div>
    );
  }
}

export default TodoItem;
