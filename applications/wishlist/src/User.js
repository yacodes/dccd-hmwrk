import React from 'react';
import {connect} from 'react-redux';

const User = props => (
  <div>
    <img style={{width: 40, height: 40,  overflow: 'hidden', borderRadius: '100%'}} src={props.avatar}/>
    <span>{props.name}</span>
  </div>
);

const mapStateToProps = state => ({
  name: state.user.name,
  avatar: state.user.avatar,
});

export default connect(mapStateToProps)(User);
