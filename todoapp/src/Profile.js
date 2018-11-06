import React, {Component} from 'react';

export const Profile = ({profileData: {name, picture}}) => (
  <div>
    <p>Name: {name}</p>
    <img src={picture}/>
  </div>
);

export default Profile;
