import React from 'react';
import {connect} from 'react-redux';
import './user.css';

const User = props => (
  <div className="user">
    <span>{props.name}</span>
    <img style={{width: 40, height: 40,  overflow: 'hidden', borderRadius: '100%'}} src={props.avatar}/>
  </div>
);

const mapStateToProps = state => ({
  name: state.user.name,
  avatar: state.user.avatar,
});

export default connect(mapStateToProps)(User);
