import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TodoItem from './TodoItem';

export const All = ({items, onChange}) => (
  <div>{items.map(item => <TodoItem onChange={onChange} key={item.id} {...item}/>)}</div>
);
export const Active = ({items, onChange}) => (
  <div>{items.filter(item => !item.isCompleted).map(item => <TodoItem onChange={onChange} key={item.id} {...item}/>)}</div>
);
export const Completed = ({items, onChange}) => (
  <div>{items.filter(item => item.isCompleted).map(item => <TodoItem onChange={onChange} key={item.id} {...item}/>)}</div>
);

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [{
        id: 1,
        name: 'Work',
        isCompleted: false
      }, {
        id: 2,
        name: 'Fun',
        isCompleted: true
      }],
    };
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckboxClick(id) {
    this.setState({
      items: this.state.items.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const items = [...this.state.items];
    items.push({
      id: Math.ceil(Math.random() * 1000000),
      name: this.state.value,
      isCompleted: false
    });

    this.setState({items: items, value: ''});
  }

  render() {
    const {items} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
          <button type="submit">Add</button>
        </form>
        <Route path="/" exact component={() => <All onChange={this.handleCheckboxClick} items={items}/>}/>
        <Route path="/active" component={() => <Active onChange={this.handleCheckboxClick} items={items}/>}/>
        <Route path="/completed" component={() => <Completed onChange={this.handleCheckboxClick} items={items}/>}/>

        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </div>
    );
  }
}

export default Todos;
