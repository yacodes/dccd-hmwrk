import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import './wishes.css';

const Wishes = props => (
  <div className="list">
    {props.items.map(item => (
      <div className="wish" key={item.id}>
        <button onClick={() => props.deleteWish(item.id)}>Delete</button>
        <img src={item.image}/>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  items: state.wishes.items,
});

const mapDispatchToProps = {
  deleteWish: actions.deleteWish
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);
